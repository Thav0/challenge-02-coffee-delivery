import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as LocationIcon } from "./assets/icons/location.svg";
import { ReactComponent as CartIcon } from "./assets/icons/cart.svg";

function App() {
  return (
    <header className="container mx-auto py-8 flex justify-between items-center">
      <Logo />
      <div className="flex items-center">
        <div className="flex items-center">
        <LocationIcon />
        Porto, Portugal
        </div>
        <div>
          <CartIcon />
        </div>
      </div>
    </header>
  )
}

export default App
