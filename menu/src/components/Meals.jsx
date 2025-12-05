import Meal from "./Meal";

const Meals = ({ meals }) => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {meals.map((meal) => (
        <Meal key={meal.id} {...meal} />
      ))}
    </ul>
  );
};

export default Meals;
