import React from 'react'
import { Card, Col, Row} from 'antd';

export const OrderList = ({key, title, count, pizzaPrice}) => {

    console.log(pizzaPrice);
    console.log(count);
    console.log(title);
    const totalPizzaPrice = Number(pizzaPrice*count);

    return (
            <Col key={key}>
                <Row gutter={16}>
                    <Col>{title}</Col>
                    <Col>{totalPizzaPrice}</Col>
                </Row>
            </Col>
    )


    // return (
    //     <div>
    //         <Col span={8}>
    //             <Card>
    //                 <p>Détail de la commande n°{orderId}</p>


    //             </Card>         
    //         </Col>
    //     </div>
    // )
}

