import React from "react";

import Item from "./Item";

const List = ({ list, deleteItem, editItem }) => {
  return (
    <div>
      {list.map((item) => (
        <Item {...item} deleteItem={deleteItem} editItem={editItem} />
      ))}
    </div>
  );
};

export default List;
