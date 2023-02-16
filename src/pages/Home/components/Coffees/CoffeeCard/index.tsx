import TraditionalEspressoIMG from "@assets/traditional-espresso.png";
import { ReactComponent as CartIcon } from "@assets/icons/cart.svg";
import { ReactComponent as MinusIcon } from "@assets/icons/minus.svg";
import { ReactComponent as PlusIcon } from "@assets/icons/plus.svg";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../../../../context/CoffeeContext";

export function CoffeeCard() {
  const { addToCart } = useContext(CoffeeContext);
  const [quantity, setQuantity] = useState(1);

  function handleSubstractQuantity() {
    if (1 === quantity) {
      return;
    }

    setQuantity(quantity - 1);
  }

  function handleAddQuantity() {
    setQuantity(quantity + 1);
  }

  return (
    <div className="bg-base-card p-5 rounded-tl-md rounded-tr-4xl rounded-bl-4xl rounded-br-md">
      <img
        src={TraditionalEspressoIMG}
        alt="Expresso Tradicional"
        className="mx-auto -mt-10"
      />
      <div className="text-center mt-3">
        <span className="inline-block text-center rounded-md py-1 px-2 font-bold text-s bg-yellow-light text-yellow-dark">
          TRADICIONAL
        </span>
        <h3 className="mt-4 text-title-s font-heading font-bold text-base-subtitle">
          Expresso Tradicional
        </h3>
        <p className="text-base-label text-regular-s">
          O tradicional café feito com água quente e grãos moídos
        </p>
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="text-base-text">
          <span className="text-xs">R$</span>
          <span className="font-heading font-black leading-none text-2xl ml-1">
            9,90
          </span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center rounded-md py-1 px-2 bg-base-button space-x-2.5">
            <button className="text-purple" onClick={handleSubstractQuantity}>
              <MinusIcon className="w-3 h-3" />
            </button>
            <span className="text-base-title">{quantity}</span>
            <button className="text-purple text-xl" onClick={handleAddQuantity}>
              <PlusIcon className="w-3 h-3" />
            </button>
          </div>
          <button
            type="button"
            className="bg-purple-dark text-white p-2 ml-2 rounded-md"
            onClick={() => {
              setQuantity(1);
              addToCart({
                id: 1,
                name: "Café espresso",
                quantity: 1,
                price: 9.99,
              });
            }}
          >
            <CartIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}