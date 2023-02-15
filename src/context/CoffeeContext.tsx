import { createContext, ReactNode } from "react";
import { Coffe, UserAddress } from "../reducers/reducer";

enum PAYMENT_TYPE {
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
  MONEY = 'MONEY'
}

interface CoffeeContextType {
  totalItems: number;
  cartItems: Coffe[];
  useAddress: UserAddress;
  paymentType: PAYMENT_TYPE;
  addToCart: () => void;
  subtractFromCart: () => void;
  removeFromCart: () => void;
  updateUserAddress: () => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({children}: CoffeeContextProviderProps) {

}