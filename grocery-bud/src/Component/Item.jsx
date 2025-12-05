import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const Item = ({ id, title, deleteItem, editItem }) => {
  return (
    <div className="flex justify-between px-3">
      <p className="capitalize font-semibold">{title}</p>
      <div>
        <button onClick={() => deleteItem(id)}>
          <FontAwesomeIcon
            icon={faTrash}
            className="mr-2 text-red-600 text-xs"
          />
        </button>
        <button onClick={() => editItem(id)}>
          <FontAwesomeIcon icon={faEdit} className="text-blue-600 text-xs" />
        </button>
      </div>
    </div>
  );
};

export default Item;
