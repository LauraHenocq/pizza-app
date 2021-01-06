import React, { Component } from 'react'
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import '../stylesheets/App.scss';
import { connect } from 'react-redux';
import { addPizza } from '../actions';
// import photoPizzas from '../photoPizzas';

class Order extends Component {

    // state = {
    //     photoPizzas,
    // }

    render() {
        const PizzasList = this.props.photoPizzas.map( item => {
            return (
                <Col span={8} key={item.id} className="pizza">
                    <Card
                        cover={
                            <img
                            alt={item.title}
                            src={`${process.env.PUBLIC_URL}/img/${item.cover}`}
                            />
                        }
                        bordered={false}
                        onClick={() => this.props.addPizza(item.id, this.props.match.params.id)}
                    >
                        <p className="pizzaName">{item.title}</p>
                        <p>{item.price}€</p>
                    </Card>
                </Col>
            );
          });

        return (
            <div className="App newOrder">
                <div className="App-container">
                    <Row className="brand">
                        {/* <i className="fas fa-pizza-slice"></i> */}
                        <p>Pizza Reeflex</p>
                    </Row>

                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {PizzasList}
                        
                        <Col span={8}>
                            <Card>
                                <p>Détail de la commande n°{this.props.match.params.id}</p>
                            </Card>

                            {/* <OrderDetail
                                orderId={this.props.match.params.id}


                            /> */}
                            
                        </Col>

                    </Row>
                </div>
            </div>
        )
    }
}

// mapStateToProps est une fonction qui permet de mettre à disposition des données du state global dans les props du composant App
// Le paramètre de cette fonction est le state global de notre store Redux
const mapStateToProps = (state) => {
    // quels éléments du state global mettons-nous à disposition dans ce compossant Order (via les props) ? 
    return {
        photoPizzas: state.photoPizzas,
        orders: state.orders
    };
  }

const mapDispatchToProps = (dispatch) => {
    return {
        addPizza: (pizzaName, orderId) => {
            dispatch(addPizza(pizzaName, orderId));
        }
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Order);