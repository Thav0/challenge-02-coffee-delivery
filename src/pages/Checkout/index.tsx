import { ReactComponent as LocationOutlineIcon } from "@assets/icons/location-outline.svg";
import { ReactComponent as DollarIcon } from "@assets/icons/dollar.svg";
import { ReactComponent as BankIcon } from "@assets/icons/bank.svg";
import { ReactComponent as CreditCardIcon } from "@assets/icons/credit-card.svg";
import { ReactComponent as CashIcon } from "@assets/icons/cash.svg";
import { ReactComponent as TrashIcon } from "@assets/icons/trash.svg";
import { Input } from "../../components/Input";
import { PaymentButton } from "../../components/PaymentButton";
import { useContext, useEffect } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import { InputQuantity } from "../../components/InputQuantity";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const navigate = useNavigate();
  const { cartItems, subtractFromCart, updateQuantity, removeFromCart } =
    useContext(CoffeeContext);

  function handleUpdateItemQuantity(coffeeId: number) {
    updateQuantity(coffeeId);
  }

  function handleSubtractItemQuantity(coffeeId: number) {
    subtractFromCart(coffeeId);
  }

  function handleRemoveItemFromCart(coffeeId: number) {
    removeFromCart(coffeeId);
  }

  useEffect(() => {
    if (cartItems.length === 0) {
      return navigate("/");
    }
  }, [cartItems]);

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
          {cartItems.map((item) => (
            <div className="flex justify-between" key={item.id}>
              <div className="flex">
                <img
                  src={`/src/assets/${item.image}`}
                  alt={item.name}
                  className=""
                />

                <div className="ml-5">
                  <div className="text-base-subtitle uppercase">
                    {item.name}
                  </div>
                  <div className="flex mt-2">
                    <InputQuantity
                      quantity={item.quantity}
                      handleAdd={() => handleUpdateItemQuantity(item.id)}
                      handleSubtract={() => handleSubtractItemQuantity(item.id)}
                    />
                    <div
                      className="flex items-center p-2 bg-base-button rounded-md ml-2 hover:bg-base-hover cursor-pointer"
                      onClick={() => handleRemoveItemFromCart(item.id)}
                    >
                      <TrashIcon className="w-5 h-5 text-purple" />
                      <div className="text-base-text text-xs ml-2">REMOVER</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-base-text font-bold">
                {item.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
