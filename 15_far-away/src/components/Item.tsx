import type { ItemProps } from "../types";

const Item = ({
  id,
  name,
  number,
  isChecked,
  onDeleteItem,
  onToggleIsChecked,
}: ItemProps) => {
  return (
    <li className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-md">
      <input
        type="checkbox"
        className="w-5 h-5 text-[rgb(41,144,255)]"
        checked={isChecked}
        onChange={() => onToggleIsChecked(id)}
        aria-label={`Toggle ${name}`}
      />
      <span className="text-lg">{number}</span>
      <span
        className={`text-lg ${isChecked ? "line-through text-gray-500" : ""}`}
      >
        {name}
      </span>
      <button
        className="text-red-600 cursor-pointer ml-auto"
        onClick={() => onDeleteItem(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Item;
