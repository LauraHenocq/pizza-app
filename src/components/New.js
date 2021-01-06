import { connect } from 'react-redux';

import React, { Component } from 'react'

class New extends Component {

    componentDidMount () {
        const direction = this.props.orders[this.props.orders.length-1].id;
        this.props.history.push(`/order/${direction}`);
    } 

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

// mapStateToProps est une fonction qui permet de mettre à disposition des données du state global dans les props du composant App
// Le paramètre de cette fonction est le state global de notre store Redux
const mapStateToProps = (state) => {
    // quels éléments du state global mettons-nous à disposition dans ce compossant App (via les props) ? 
    return {
      orders: state.orders
    };
  }
  
  export default connect(mapStateToProps, null)(New);