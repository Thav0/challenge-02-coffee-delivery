import { ReactComponent as Logo } from "@assets/logo.svg";
import { ReactComponent as LocationIcon } from "@assets/icons/location.svg";
import { ReactComponent as CartIcon } from "@assets/icons/cart.svg";

export function Header() {
  return (
    <header className="py-8 flex justify-between items-center">
        <Logo />
        <div className="flex items-center">
          <div className="flex items-center p-2 bg-purple-light text-purple-dark rounded-md">
            <LocationIcon className=" w-4 h-4" />
            <span className="ml-2 text-sm">Porto, Portugal</span>
          </div>
          <div className="ml-3 p-2 rounded-md bg-yellow-light text-yellow-dark">
            <CartIcon className="w-4 h-4" />
          </div>
        </div>
      </header>
  )
}