import { BUY_PIZZA } from "./pizzaActionTypes"

const buy_pizza=()=>{
    return {
        type: BUY_PIZZA,
        payload : 'buy the pizza'
    };
}
export { buy_pizza };

