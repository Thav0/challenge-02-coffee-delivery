import { BrowserRouter } from "react-router-dom";
import { CoffeeContextProvider } from "./context/CoffeeContext";
import { Router } from "./Router";

export function App() {
  return (
    <BrowserRouter>
      <CoffeeContextProvider>
        <Router />
      </CoffeeContextProvider>
    </BrowserRouter>
  )
}