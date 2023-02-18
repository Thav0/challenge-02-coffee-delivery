import { createContext, ReactNode, useReducer, useState } from "react";
import {
  addToCartAction,
  removeItemFromCartAction,
  subtractItemQuantityAction,
  updateItemQuantityAction,
} from "../reducers/actions";
import { Coffe, coffeesReducer, UserAddress } from "../reducers/reducer";

enum PAYMENT_TYPE {
  CREDIT_CARD = "CREDIT_CARD",
  DEBIT_CARD = "DEBIT_CARD",
  MONEY = "MONEY",
}

interface CoffeeContextType {
  totalItems: number;
  cartItems: Coffe[];
  userAddress: UserAddress | null;
  paymentType: PAYMENT_TYPE;
  addToCart: (coffee: Coffe) => void;
  subtractFromCart: (coffeeId: number) => void;
  updateQuantity: (cofeeId: number) => void;
  removeFromCart: (coffeeId: number) => void;
  setUserAddress: (address: UserAddress) => void;
  setPaymentTypeHandler: (paymentType: PAYMENT_TYPE) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(coffeesReducer, {
    cartItems: [],
    userAddress: null,
  });
  const { cartItems, userAddress } = coffeesState;
  const [paymentType, setPaymentType] = useState(PAYMENT_TYPE.CREDIT_CARD);
  const totalItems = cartItems.length;

  function addToCart(coffee: Coffe) {
    dispatch(addToCartAction(coffee));
  }

  function subtractFromCart(coffeeId: number) {
    dispatch(subtractItemQuantityAction(coffeeId));
  }

  function removeFromCart(coffeeId: number) {
    dispatch(removeItemFromCartAction(coffeeId));
  }

  function setUserAddress(address: UserAddress) {
    // dispatch
  }

  function setPaymentTypeHandler(paymentType: PAYMENT_TYPE) {
    setPaymentType(paymentType);
  }

  function updateQuantity(coffeeId: number) {
    dispatch(updateItemQuantityAction(coffeeId));
  }

  return (
    <CoffeeContext.Provider
      value={{
        totalItems,
        cartItems,
        userAddress,
        paymentType,
        addToCart,
        updateQuantity,
        subtractFromCart,
        removeFromCart,
        setUserAddress,
        setPaymentTypeHandler,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
