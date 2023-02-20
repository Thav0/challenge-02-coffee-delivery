import { ReactComponent as LocationIcon } from "@assets/icons/location.svg";
import { ReactComponent as TimerIcon } from "@assets/icons/timer.svg";
import { ReactComponent as DollarIcon } from "@assets/icons/dollar.svg";
import { ReactComponent as PaymentConfirmedIllustration } from "@assets/payment-confirmed-illustration.svg";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import { PAYMENT_TYPES } from "../Checkout";
import { InfoItem } from "./styles";

const PaymentsTypesNames = {
  [PAYMENT_TYPES.CREDIT_CARD]: "Cartão de crédito",
  [PAYMENT_TYPES.DEBIT_CARD]: "Cartão de débito",
  [PAYMENT_TYPES.MONEY]: "Dinheiro",
};

export function PaymentConfirmed() {
  const { userAddress, paymentType } = useContext(CoffeeContext);

  return (
    <div className="container mx-auto">
      <h1 className="font-heading text-yellow-dark text-4xl font-extrabold mt-20">
        Uhu! Pedido confirmado
      </h1>
      <div className="mt-1 text-base-subtitle text-title-s">
        Agora é só aguardar que logo o café chegará até você
      </div>
      <div className="grid grid-cols-2">
        <div className="max-w-lg p-10 mt-10 border border-yellow-dark rounded-tl-md rounded-tr-4xl rounded-bl-4xl rounded-br-md space-y-8">
          <div className="flex items-center">
            <LocationIcon className="p-2 bg-purple text-white w-7 h-7 rounded-full" />
            <InfoItem>
              Entrega em
              <div className="inline-block ml-1 font-bold">
                {userAddress?.street}, {userAddress?.streetNumber}
              </div>
              <div>
                {userAddress?.neighborhood}
                {`${userAddress?.city} - ${userAddress?.state}`}
              </div>
            </InfoItem>
          </div>
          <div className="flex items-center">
            <TimerIcon className="p-2 bg-yellow text-white w-7 h-7 rounded-full" />
            <InfoItem>
              Previsão de entrega
              <br />
              <span className="font-bold">20 min - 30 min </span>
            </InfoItem>
          </div>
          <div className="flex items-center">
            <DollarIcon className="p-2 bg-yellow-dark text-white w-7 h-7 rounded-full" />
            <InfoItem>
              Pagamento na entrega
              <br />
              <span className="font-bold">
                {PaymentsTypesNames[paymentType]}
              </span>
            </InfoItem>
          </div>
        </div>
        <div>
          <PaymentConfirmedIllustration />
        </div>
      </div>
    </div>
  );
}
