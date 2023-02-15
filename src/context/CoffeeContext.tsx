import { createContext, ReactNode, useReducer, useState } from "react";
import { addToCartAction } from "../reducers/actions";
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
    totalItems: 0,
    cartItems: [],
    userAddress: null,
  });
  const { cartItems, totalItems, userAddress } = coffeesState;
  const [paymentType, setPaymentType] = useState(PAYMENT_TYPE.CREDIT_CARD);

  function addToCart(coffee: Coffe) {
    // dispatch add to cart
    dispatch(
      addToCartAction(coffee)
    );
  }

  function subtractFromCart(coffeeId: number) {
    // dispatch subtract from cart
  }

  function removeFromCart(coffeeId: number) {
    // dispatch
  }

  function setUserAddress(address: UserAddress) {
    // dispatch
  }

  function setPaymentTypeHandler(paymentType: PAYMENT_TYPE) {
    setPaymentType(paymentType);
  }

  return (
    <CoffeeContext.Provider
      value={{
        totalItems,
        cartItems,
        userAddress,
        paymentType,
        addToCart,
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
