import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as LocationIcon } from "./assets/icons/location.svg";
import { ReactComponent as CartIcon } from "./assets/icons/cart.svg";
import { ReactComponent as PackageIcon } from "./assets/icons/package.svg";
import { ReactComponent as CoffeeIcon } from "./assets/icons/coffee.svg";
import { ReactComponent as TimerIcon } from "./assets/icons/timer.svg";
import HomePageBanner from "./assets/home-page-banner.png";

function App() {
  return (
    <div className="container mx-auto">
      <header className="py-8 flex justify-between items-center">
        <Logo />
        <div className="flex items-center">
          <div className="flex items-center p-2 bg-purple-light text-purple-dark rounded-md">
            <LocationIcon className=" w-4 h-4" />
            <span className="ml-2 text-sm">Porto, Portugal</span>
          </div>
          <div className="ml-3 p-2 rounded-md bg-yellow-light text-yellow-dark">
            <CartIcon className=" w-4 h-4" />
          </div>
        </div>
      </header>
      <section className="grid grid-cols-2 pt-32 pb-36">
        <div>
          <h1 className="text-5xl font-extrabold font-heading">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <div className="text-xl text-subtitle mt-4">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-5 mt-16">
            <div className="flex items-center">
              <span className="rounded-full p-2 bg-yellow-dark">
                <CartIcon className="w-3 h-3 text-white" />
              </span>
              <span className="text-paragraph ml-3">
                Compra simples e segura
              </span>
            </div>
            <div className="flex items-center">
              <span className="rounded-full p-2 bg-base-text">
                <PackageIcon className="w-3 h-3 text-white" />
              </span>
              <span className="text-paragraph ml-3">
                Embalagem mantém o café intacto
              </span>
            </div>
            <div className="flex items-center">
              <span className="rounded-full p-2 bg-yellow">
                <TimerIcon className="w-3 h-3 text-white" />
              </span>
              <span className="text-paragraph ml-3">
                Entrega rápida e rastreada
              </span>
            </div>

            <div className="flex items-center">
              <span className="rounded-full p-2 bg-purple-dark">
                <CoffeeIcon className="w-3 h-3 text-white" />
              </span>
              <span className="text-paragraph ml-3">
                O café chega fresquinho até você
              </span>
            </div>
          </div>
        </div>
        <div>
          <img src={HomePageBanner} />
        </div>
      </section>
    </div>
  );
}

export default App;
