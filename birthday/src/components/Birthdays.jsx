import React from "react";
import Birthday from "./Birthday";

const Birthdays = ({ birthdays }) => {
  return (
    <div className="mb-3">
      <ul>
        {birthdays.map((birthday) => (
          <Birthday
            key={birthday.id}
            name={birthday.name}
            age={birthday.age}
            image={birthday.image}
          />
        ))}
      </ul>
    </div>
  );
};

export default Birthdays;
