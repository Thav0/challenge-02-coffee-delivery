import { ReactComponent as LocationOutlineIcon } from "@assets/icons/location-outline.svg";
import { ReactComponent as DollarIcon } from "@assets/icons/dollar.svg";
import { ReactComponent as BankIcon } from "@assets/icons/bank.svg";
import { ReactComponent as CreditCardIcon } from "@assets/icons/credit-card.svg";
import { ReactComponent as CashIcon } from "@assets/icons/cash.svg";
import { Input } from "../../components/Input";
import { PaymentButton } from "../../components/PaymentButton";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";

export function Checkout() {
  const { cartItems } = useContext(CoffeeContext);

  console.log(cartItems);

  return (
    <div className="container mx-auto grid grid-cols-2 gap-x-8 mt-10">
      <div>
        <h2 className="font-heading font-bold text-title-xs text-base-subtitle">
          Complete seu pedido
        </h2>
        <div className="bg-base-card p-10 mt-3 rounded-md">
          <div className="flex">
            <LocationOutlineIcon className="w-5 h-5 text-yellow-dark" />
            <div className="ml-2">
              <div className="leading-none text-base-subtitle">
                Endereço de Entrega
              </div>
              <div className="mt-1 leading-none text-base-text text-sm">
                Informe o endereço onde deseja receber seu pedido
              </div>
            </div>
          </div>

          {/* Form fields */}
          <div className="mt-8 space-y-4">
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <Input placeholder="CEP" type="text" />
              </div>
            </div>
            <div>
              <Input placeholder="Rua" type="text" />
            </div>
            <div className="grid grid-cols-3 gap-x-3">
              <div className="col-span-1">
                <Input placeholder="Número" type="text" />
              </div>
              <div className="col-span-2">
                <Input placeholder="Complemento" type="text" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-x-3">
              <div className="col-span-1">
                <Input placeholder="Bairro" type="text" />
              </div>
              <div className="col-span-1">
                <Input placeholder="Cidade" type="text" />
              </div>
              <div className="col-span-1">
                <Input placeholder="UF" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-base-card p-10 mt-3 rounded-md">
          <div className="flex">
            <DollarIcon className="w-5 h-5 text-purple" />
            <div className="ml-2">
              <div className="leading-none text-base-subtitle">
                Endereço de Entrega
              </div>
              <div className="mt-1 leading-none text-base-text text-sm">
                Informe o endereço onde deseja receber seu pedido
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between space-x-3 mt-8">
            <PaymentButton Icon={CreditCardIcon} name="Cartão de Crédito" />
            <PaymentButton Icon={BankIcon} name="Cartão de Débito" />
            <PaymentButton Icon={CashIcon} name="Dinheiro" />
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-heading font-bold text-title-xs text-base-subtitle">
          Cafés selecionados
        </h2>
        <div className="bg-base-card p-10 mt-3 rounded-tl-md rounded-tr-4xl rounded-bl-4xl rounded-br-md">
          <div className="flex items-center"></div>
        </div>
      </div>
    </div>
  );
}
