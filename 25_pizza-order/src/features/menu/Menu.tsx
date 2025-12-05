import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import type { Pizza } from "../../types";

function Menu() {
  const menu = useLoaderData() as Pizza[];

  return (
    <div>
      <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
        Our Delicious Menu 🍕
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export async function loader(): Promise<Pizza[]> {
  const menu = await getMenu();
  return menu;
}

export default Menu;
