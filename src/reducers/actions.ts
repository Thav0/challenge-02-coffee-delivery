import { Coffe } from "./reducer";

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  SUBTRACT_FROM_CART = 'SUBTRACT_FROM_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  UPDATE_USER_ADDRESS = 'UPDATE_USER_ADDRESS'
}

export function addToCartAction(coffee: Coffe) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      coffee,
    },
  }
}