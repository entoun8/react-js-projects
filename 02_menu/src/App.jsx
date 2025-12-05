import { useState } from "react";
import Meals from "./components/Meals";
import menu from "./data.js";
import Categories from "./components/Categories";

function App() {
  const [meals, setMeals] = useState(menu);
  const categories = ["all", ...new Set(menu.map((meal) => meal.category))];

  const handleFilter = (category) => {
    if (category === "all") {
      setMeals(menu);
      return;
    }

    const filteredMeals = menu.filter((meal) => meal.category === category);
    setMeals(filteredMeals);
  };

  return (
    <div className="flex justify-center bg-blue-50">
      <div className="mt-16 mb-5 mx-5">
        <h1 className="text-center text-3xl font-semibold mb-5">Our Menu</h1>
        <Categories categories={categories} handleFilter={handleFilter} />
        <Meals meals={meals} />
      </div>
    </div>
  );
}

export default App;
