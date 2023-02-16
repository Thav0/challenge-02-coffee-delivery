import { CoffeeCard } from "./CoffeeCard";

export function Coffees() {
  return (
    <section className="pb-20">
      <h2 className="font-heading text-title-l text-base-f">Nossos cafés</h2>
      <div className="grid py-8 gap-y-9 gap-x-8 md:grid-cols-3 lg:grid-cols-4">
        {[0, 1, 2, 3, 4, 5, 6].map((coffe) => (
          <CoffeeCard key={coffe} />
        ))}
      </div>
    </section>
  );
}
