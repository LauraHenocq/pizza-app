import React, { Component } from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './stylesheets/App.scss';

import { newOrder } from './actions';
import { connect } from 'react-redux';

class App extends Component {

  handleClick = (page) => {
    this.props.history.push(`/${page}`);
    this.props.newOrder()
  }

  render() {
    return (
      <div className="App">

        <div className="App-container">
          <Row className="brand">
            {/* <i className="fas fa-pizza-slice"></i> */}
            <p>Pizza Reeflex</p>
          </Row>

          <Row className="tabs">

              <Col className="tab tab1" onClick={() => this.handleClick("new")}>
                <h1>icône camion</h1>
                <hr/>
                <h1>Nouvelle commande</h1>
                <p>Créer et enregistrer une nouvelle commande</p>
              </Col>

            <Col className="tab tab2">
              <h1>icône feu</h1>
              <hr/>
              <h1>Commande en cours</h1>
              <p>Voir le détail des commandes en cours</p>
            </Col>

            <Col className="tab tab3">
              <h1>icône euro</h1>
              <hr/>
              <h1>Paiement commande</h1>
              <p>Encaisser une commande</p>
            </Col>

          </Row>
        </div>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newOrder: () => {
      dispatch(newOrder());
    }
  };
}

export default connect(null, mapDispatchToProps)(App);

