import { ReactComponent as Logo } from "@assets/logo.svg";
import { ReactComponent as LocationIcon } from "@assets/icons/location.svg";
import { ReactComponent as CartIcon } from "@assets/icons/cart.svg";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import { Link, NavLink } from "react-router-dom";

export function Header() {
  const { totalItems } = useContext(CoffeeContext);

  return (
    <header className="container mx-auto py-8 flex justify-between items-center">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex items-center">
        <div className="flex items-center p-2 bg-purple-light text-purple-dark rounded-md">
          <LocationIcon className=" w-4 h-4" />
          <span className="ml-2 text-sm">Porto, Portugal</span>
        </div>
        <NavLink
          to={totalItems > 0 ? "/checkout-address" : "/"}
          className="ml-3 p-2 rounded-md bg-yellow-light text-yellow-dark relative"
        >
          <CartIcon className="w-4 h-4" />
          {totalItems > 0 && (
            <div className="flex items-center justify-center absolute -right-2.5 -top-2.5 w-5 h-5 bg-yellow-dark rounded-full">
              <span className="text-xs text-white">{totalItems}</span>
            </div>
          )}
        </NavLink>
      </div>
    </header>
  );
}
