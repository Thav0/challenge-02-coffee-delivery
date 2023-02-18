import produce from "immer";
import { ActionTypes } from "./actions";

export interface Coffe {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  description: string;
}

export interface UserAddress {
  postalCode: string;
  street: string;
  streetNumber: string;
  neighborhood: string;
  state: string;
  city: string;
  additionalInfo: string;
}

interface CoffeesState {
  cartItems: Coffe[];
  userAddress: UserAddress | null;
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        const cartItemIndex = draft.cartItems.findIndex(
          (item) => item.id === action.payload.coffee.id
        );

        if (cartItemIndex < 0) {
          draft.cartItems.push(action.payload.coffee);
        } else if (cartItemIndex >= 0) {
          draft.cartItems[cartItemIndex].quantity++;
        }
      });

    case ActionTypes.UPDATE_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const cartItemIndex = draft.cartItems.findIndex(
          (item) => item.id === action.payload.coffeeId
        );

        if (cartItemIndex < 0) {
          return state;
        }

        draft.cartItems[cartItemIndex].quantity++;
      });

    case ActionTypes.SUBTRACT_FROM_CART:
      return produce(state, (draft) => {
        const cartItemIndex = draft.cartItems.findIndex(
          (item) => item.id === action.payload.coffeeId
        );

        if (cartItemIndex < 0) {
          return state;
        }

        const item = draft.cartItems[cartItemIndex];

        if (item.quantity === 1) {
          draft.cartItems = draft.cartItems.filter(
            (currentItem) => currentItem.id !== item.id
          );
        } else {
          draft.cartItems[cartItemIndex].quantity--;
        }
      });

    case ActionTypes.REMOVE_FROM_CART:
      return produce(state, (draft) => {
        const cartItemIndex = draft.cartItems.findIndex(
          (item) => item.id === action.payload.coffeeId
        );

        if (cartItemIndex < 0) {
          return state;
        }

        const item = draft.cartItems[cartItemIndex];

        draft.cartItems = draft.cartItems.filter(
          (currentItem) => currentItem.id !== item.id
        );
      });

    default:
      return state;
  }
}
