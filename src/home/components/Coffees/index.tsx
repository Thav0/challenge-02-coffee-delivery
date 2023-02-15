import TraditionalEspressoIMG from "@assets/traditional-espresso.png";
import { ReactComponent as CartIcon } from "@assets/icons/cart.svg";

export function Coffees() {
  return (
    <section className="pb-20">
      <h2 className="font-heading text-title-l text-base-f">Nossos cafés</h2>
      <div className="grid py-8 md:grid-cols-3 lg:grid-cols-4">
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
          </div>
          <h3 className="mt-4 text-title-s font-bold text-base-subtitle">
            Expresso Tradicional
          </h3>
          <p className="text-base-label text-regular-s text-center">
            O tradicional café feito com água quente e grãos moídos
          </p>

          <div className="flex justify-between items-center mt-8">
            <div className="text-base-text">
              <span className="text-xs">R$</span>
              <span className="font-heading leading-none text-2xl ml-1">
                9,90
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center rounded-md py-1 px-2 bg-base-button space-x-2.5">
                <button className="text-purple text-xl align-middle">-</button>
                <span>1</span>
                <button className="text-purple text-xl">+</button>
              </div>
              <div className="bg-purple-dark text-white p-2 ml-2 rounded-md">
                <CartIcon className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
