import { ReactComponent as LocationOutlineIcon } from "@assets/icons/location-outline.svg";
import { ReactComponent as DollarIcon } from "@assets/icons/dollar.svg";
import { ReactComponent as BankIcon } from "@assets/icons/bank.svg";
import { ReactComponent as CreditCardIcon } from "@assets/icons/credit-card.svg";
import { ReactComponent as CashIcon } from "@assets/icons/cash.svg";
import { ReactComponent as TrashIcon } from "@assets/icons/trash.svg";
import { PaymentButton } from "../../components/PaymentButton";
import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import { InputQuantity } from "../../components/InputQuantity";
import { useNavigate } from "react-router-dom";
import { numberToCurrencyBrazil } from "../../utils/numberToCurrencyBrazil";
import { useForm } from "react-hook-form";
import { InputText } from "./styles";

export enum PAYMENT_TYPES {
  CREDIT_CARD = "CREDIT_CARD",
  DEBIT_CARD = "DEBIT_CARD",
  MONEY = "MONEY",
}

export function Checkout() {
  // const { register } = useFormContext();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const {
    cartItems,
    subtractFromCart,
    updateQuantity,
    removeFromCart,
    shippingPrice,
  } = useContext(CoffeeContext);
  const [paymentType, setPaymentType] = useState(PAYMENT_TYPES.CREDIT_CARD);

  function handleUpdateItemQuantity(coffeeId: number) {
    updateQuantity(coffeeId);
  }

  function handleSubtractItemQuantity(coffeeId: number) {
    subtractFromCart(coffeeId);
  }

  function handleRemoveItemFromCart(coffeeId: number) {
    removeFromCart(coffeeId);
  }

  function totalCartItems() {
    return cartItems.reduce((accumulator, coffeeItem) => {
      return accumulator + coffeeItem.quantity * coffeeItem.price;
    }, 0);
  }

  function totalCart() {
    return totalCartItems() + shippingPrice;
  }

  function handleConfirmPayment(data) {
    console.log(data);
  }

  function isPaymentTypeSelected(paymentTypeName: PAYMENT_TYPES) {
    return paymentType === paymentTypeName;
  }

  useEffect(() => {
    if (cartItems.length === 0) {
      return navigate("/");
    }
  }, [cartItems]);

  return (
    <div className="container mx-auto mt-10">
      <form
        className="grid grid-cols-2 gap-x-8"
        onSubmit={handleSubmit(handleConfirmPayment)}
      >
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
                  <InputText
                    type="text"
                    placeholder="CEP"
                    {...register("cep")}
                  />
                </div>
              </div>
              <div>
                <InputText
                  placeholder="Rua"
                  type="text"
                  {...register("street")}
                />
              </div>
              <div className="grid grid-cols-3 gap-x-3">
                <div className="col-span-1">
                  <InputText
                    placeholder="Número"
                    type="text"
                    {...register("street_number")}
                  />
                </div>
                <div className="col-span-2">
                  <InputText
                    placeholder="Complemento"
                    type="text"
                    {...register("additional_info")}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-x-3">
                <div className="col-span-1">
                  <InputText
                    placeholder="Bairro"
                    type="text"
                    {...register("neighboorhod")}
                  />
                </div>
                <div className="col-span-1">
                  <InputText
                    placeholder="Cidade"
                    type="text"
                    {...register("city")}
                  />
                </div>
                <div className="col-span-1">
                  <InputText
                    placeholder="UF"
                    type="text"
                    {...register("state")}
                  />
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
              <PaymentButton
                Icon={CreditCardIcon}
                name="Cartão de Crédito"
                isSelected={isPaymentTypeSelected(PAYMENT_TYPES.CREDIT_CARD)}
                onClick={() => setPaymentType(PAYMENT_TYPES.CREDIT_CARD)}
              />
              <PaymentButton
                Icon={BankIcon}
                name="Cartão de Débito"
                isSelected={isPaymentTypeSelected(PAYMENT_TYPES.DEBIT_CARD)}
                onClick={() => setPaymentType(PAYMENT_TYPES.DEBIT_CARD)}
              />
              <PaymentButton
                Icon={CashIcon}
                name="Dinheiro"
                isSelected={isPaymentTypeSelected(PAYMENT_TYPES.MONEY)}
                onClick={() => setPaymentType(PAYMENT_TYPES.MONEY)}
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-heading font-bold text-title-xs text-base-subtitle">
            Cafés selecionados
          </h2>
          <div className="grid-flow-row bg-base-card p-10 mt-3 rounded-tl-md rounded-tr-4xl rounded-bl-4xl rounded-br-md divide-y divide-y-base-button">
            {cartItems.map((item) => (
              <div className="flex justify-between py-6" key={item.id}>
                <div className="flex">
                  <img
                    src={`/src/assets/${item.image}`}
                    alt={item.name}
                    className="w-16 h-16"
                  />

                  <div className="ml-5">
                    <div className="text-base-subtitle uppercase">
                      {item.name}
                    </div>
                    <div className="flex mt-2">
                      <InputQuantity
                        quantity={item.quantity}
                        handleAdd={() => handleUpdateItemQuantity(item.id)}
                        handleSubtract={() =>
                          handleSubtractItemQuantity(item.id)
                        }
                      />
                      <div
                        className="flex items-center p-2 bg-base-button rounded-md ml-2 hover:bg-base-hover cursor-pointer"
                        onClick={() => handleRemoveItemFromCart(item.id)}
                      >
                        <TrashIcon className="w-5 h-5 text-purple" />
                        <div className="text-base-text text-xs ml-2">
                          REMOVER
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-base-text font-bold">
                  {numberToCurrencyBrazil(item.price)}
                </div>
              </div>
            ))}
            <div className="py-6 space-y-3">
              <div className="flex items-center justify-between text-base-text">
                <div className="text-sm">Total de items</div>
                <div>{numberToCurrencyBrazil(totalCartItems())}</div>
              </div>
              <div className="flex items-center justify-between text-base-text">
                <div className="text-sm">Entrega</div>
                <div>{numberToCurrencyBrazil(shippingPrice)}</div>
              </div>
              <div className="flex items-center justify-between text-title-s text-base-subtitle">
                <div>Total</div>
                <div>{numberToCurrencyBrazil(totalCart())}</div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-yellow text-white w-full py-3 uppercase font-bold text-sm rounded-md hover:bg-yellow-dark"
            >
              Confirmar Pedido
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
