import produce from "immer";
import { ActionTypes } from "./actions";

export interface Coffe {
  id: number;
  name: string;
  quantity: number;
  price: number;
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
  totalItems: number;
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
          draft.totalItems++;
        } else if (cartItemIndex >= 0) {
          draft.cartItems[cartItemIndex].quantity++;
        }
      });

    default:
      return state;
  }
}
