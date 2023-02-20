import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { PAYMENT_TYPES } from "../pages/Checkout";
import {
  addToCartAction,
  confirmPaymentAction,
  removeItemFromCartAction,
  subtractItemQuantityAction,
  updateItemQuantityAction,
} from "../reducers/actions";
import { Coffe, coffeesReducer, UserAddress } from "../reducers/reducer";

interface CoffeeContextType {
  totalItems: number;
  cartItems: Coffe[];
  userAddress: UserAddress | null;
  paymentType: PAYMENT_TYPES;
  shippingPrice: number;
  addToCart: (coffee: Coffe) => void;
  subtractFromCart: (coffeeId: number) => void;
  updateQuantity: (cofeeId: number) => void;
  removeFromCart: (coffeeId: number) => void;
  confirmPayment: (
    userAddress: UserAddress,
    paymentType: PAYMENT_TYPES
  ) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    coffeesReducer,
    {
      cartItems: [],
      userAddress: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        "@ignite-challenge-02:coffee-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return {
        cartItems: [],
        userAddress: null,
      };
    }
  );

  const { cartItems, userAddress } = coffeesState;
  const [paymentType, setPaymentType] = useState(PAYMENT_TYPES.CREDIT_CARD);
  const totalItems = cartItems.length;
  const shippingPrice = 3.5;

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesState);

    localStorage.setItem("@ignite-challenge-02:coffee-state-1.0.0", stateJSON);
  }, [coffeesState]);

  function addToCart(coffee: Coffe) {
    dispatch(addToCartAction(coffee));
  }

  function subtractFromCart(coffeeId: number) {
    dispatch(subtractItemQuantityAction(coffeeId));
  }

  function removeFromCart(coffeeId: number) {
    dispatch(removeItemFromCartAction(coffeeId));
  }

  function updateQuantity(coffeeId: number) {
    dispatch(updateItemQuantityAction(coffeeId));
  }

  function confirmPayment(
    userAddress: UserAddress,
    paymentType: PAYMENT_TYPES
  ) {
    dispatch(confirmPaymentAction(userAddress, paymentType));
  }

  return (
    <CoffeeContext.Provider
      value={{
        totalItems,
        cartItems,
        userAddress,
        paymentType,
        shippingPrice,
        addToCart,
        updateQuantity,
        subtractFromCart,
        removeFromCart,
        confirmPayment,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
