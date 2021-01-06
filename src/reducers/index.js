import { NEW_ORDER, ADD_PIZZA } from '../actions/types';
import photoPizzas from '../photoPizzas';

const initialState = {
    photoPizzas,
    orders: []
};

export default function rootReducer (state = initialState, action) {

    let orders = [...state.orders]; 
    let photoPizzas = [...state.photoPizzas];

    switch (action.type) {
        case NEW_ORDER :
            // Ajout d'une commande dans le state global
            return {
                orders: [...state.orders, action.payload],
                photoPizzas
            }
        
        case ADD_PIZZA :
                const findpizzaName = (element) => element.id === action.payload.pizzaName;
                const findOrder = (element) => element.id === action.payload.orderId
                const indexOrder = orders.findIndex(findOrder);
                const order = orders[indexOrder].order;
                const index = order.findIndex(findpizzaName);
                order[index].count = order[index].count+1;

                // Calculer le prix total
                let totalPrice=0;
                let i = 0;
                order.forEach(element => {
                    console.log(element);
                    totalPrice = Number(element.count*photoPizzas[i].price + totalPrice);
                    i = i +1;
                });

                console.log(totalPrice);
                orders[indexOrder].price = totalPrice;

                orders[indexOrder].order = order;
                

                return {
                    orders,
                    photoPizzas
                }
            
        

        default:
            return state
            // par défaut, on retourne le state, on ne fait rien d'autre
    }
}