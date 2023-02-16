import { Banner } from "./components/Banner";
import { Coffees } from "./components/Coffees";

function Home() {
  return (
    <>
      <Banner />
      <div className="container mx-auto py-10">
        <Coffees />
      </div>
    </>
  );
}

export default Home;
