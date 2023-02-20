import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Checkout } from "./pages/Checkout";
import { PaymentConfirmed } from "./pages/PaymentConfirmed";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment-confirmed" element={<PaymentConfirmed />} />
      </Route>
    </Routes>
  );
}
