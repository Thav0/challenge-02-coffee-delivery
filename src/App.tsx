import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as LocationIcon } from "./assets/icons/location.svg";
import { ReactComponent as CartIcon } from "./assets/icons/cart.svg";

function App() {
  return (
    <header className="container mx-auto py-8 flex justify-between items-center">
      <Logo />
      <div className="flex items-center">
        <div className="flex items-center p-2 bg-purple-light rounded-md">
          <LocationIcon />
          <span className="ml-2 text-sm text-purple-dark">Porto, Portugal</span>
        </div>
        <div className="ml-3 p-2 rounded-md bg-yellow-light text-yellow-dark">
          <CartIcon />
        </div>
      </div>
    </header>
  );
}

export default App;
