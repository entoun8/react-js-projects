import Pizza from "./Pizza";
import { pizzaData } from "../data";

const Menu = () => {
  const empty = pizzaData.length === 0;

  return (
    <>
      {!empty ? (
        <main className="max-w-4xl mx-auto py-8 px-4">
          <h1 className="text-4xl font-bold text-center mb-4 text-[#2990FF]">
            Our Menu
          </h1>
          <p className="text-center text-lg mb-10">
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} {...pizza} />
            ))}
          </ul>

          <div className="text-center mt-10">
            <button className="bg-[#2990FF] hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition">
              Order
            </button>
          </div>
        </main>
      ) : null}
    </>
  );
};

export default Menu;
