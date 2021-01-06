import { NEW_ORDER, ADD_PIZZA } from './types';

// Création d'une fonction pour appeler l'action NEW_ORDER et retourner un objet qui sera par la suite envoyé au Reducer
export const newOrder = () => {
    return ({
        type: NEW_ORDER,
        payload: {
            id: `CMD-${Date.now()}`,
            order: [{ id: "marguerita", count:0}, { id : "pepperoni", count:0 }, { id : "4fromages", count:0 }, { id : "reine", count:0 }],
            price:0,
            paid: false
        }
    });
}

export const addPizza = (pizzaName, orderId) => {
    return({
        type: ADD_PIZZA,
        payload: {
            pizzaName: pizzaName,
            orderId: orderId
        }
    })
}
