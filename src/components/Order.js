import React, { Component } from 'react'
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import '../stylesheets/App.scss';
import { connect } from 'react-redux';
import { addPizza } from '../actions';
import { OrderList } from './OrderList';
// import photoPizzas from '../photoPizzas';

class Order extends Component {

    // state = {
    //     photoPizzas,
    // }

    renderListOrder() {
        const findOrder = (element) => element.id === this.props.match.params.id;
        const indexOrder = this.props.orders.findIndex(findOrder);
        const totalPrice = Math.round(this.props.orders[indexOrder].price*100)/100;

        const orderList = this.props.photoPizzas.map(item => {
            let i=0;
            return(
                <OrderList
                    key={item.title}
                    title={item.title}
                    count={this.props.orders[indexOrder].order[i].count}
                    // orders={this.props.orders}
                    // orderIndex={this.props.orders.indexOf(this.props.match.params.id)}
                    pizzaPrice={item.price}
                />
                // <Col key={item.title}>
                //     <Row gutter={16}>
                //         <Col>{item.title}</Col>
                //         <Col>{item.price}</Col>
                //     </Row>
                // </Col>
                
            );
        });

        return (
            <div>
                {orderList}
                <p>Soit un total de : {totalPrice} €</p>
            </div>
            
        );
    }

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
                                {this.renderListOrder()}
                            </Card>

                            {/* <OrderList
                                orderId={this.props.match.params.id}
                                orders={this.props.orders}
                                orderIndex={this.props.orders.indexOf(this.props.match.params.id)}
                                pizzas={this.props.photoPizzas}
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