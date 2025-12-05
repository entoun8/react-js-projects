import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, handleDelete }) => {
  return (
    <ul>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default Tours;
