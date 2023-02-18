import { useEffect, useState } from "react";
import { Coffe } from "../../../../reducers/reducer";
import { CoffeeCard } from "./CoffeeCard";

export function Coffees() {
  const [coffess, setCoffees] = useState<Coffe[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCoffees() {
      setIsLoading(true);
      const response = await fetch("../../../coffees.json");
      const jsonData = await response.json();

      setCoffees(jsonData);
      setIsLoading(false);
    }

    fetchCoffees();

    console.log(coffess);
  }, []);

  return (
    <section className="pb-20">
      <h2 className="font-heading text-title-l text-base-f">Nossos cafés</h2>
      <div className="grid py-8 gap-y-9 gap-x-8 md:grid-cols-3 lg:grid-cols-4">
        {isLoading
          ? "<div>Carregando</div>"
          : coffess.map((coffee) => (
              <CoffeeCard coffee={coffee} key={coffee.id} />
            ))}
      </div>
    </section>
  );
}
