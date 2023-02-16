import { ReactComponent as LocationOutlineIcon } from "@assets/icons/location-outline.svg";

export function Checkout() {
  return (
    <div className="container mx-auto grid grid-cols-2 mt-10">
      <div className="">
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
        </div>
        <div>payment</div>
      </div>
      <div>total cart</div>
    </div>
  );
}
