import { Coffe } from "./reducer";

export enum ActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  SUBTRACT_FROM_CART = "SUBTRACT_FROM_CART",
  UPDATE_ITEM_QUANTITY = "UPDATE_ITEM_QUANTITY",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  UPDATE_USER_ADDRESS = "UPDATE_USER_ADDRESS",
}

export function addToCartAction(coffee: Coffe) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      coffee,
    },
  };
}

export function updateItemQuantityAction(coffeeId: number) {
  return {
    type: ActionTypes.UPDATE_ITEM_QUANTITY,
    payload: {
      coffeeId,
    },
  };
}

export function subtractItemQuantityAction(coffeeId: number) {
  return {
    type: ActionTypes.SUBTRACT_FROM_CART,
    payload: {
      coffeeId,
    },
  };
}

export function removeItemFromCart(coffeeId: number) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      coffeeId,
    },
  };
}
