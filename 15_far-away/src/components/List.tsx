import type { ListProps } from "../types";
import Item from "./Item";

const List = ({
  items,
  onDeleteItem,
  onToggleIsChecked,
  onClearList,
  orderBy,
  setOrderBy,
}: ListProps) => {
  return (
    <main className="w-full max-w-md space-y-4">
      {items.length > 0 ? (
        <>
          <ul className="space-y-2">
            {items.map((item) => (
              <Item
                key={item.id}
                {...item}
                onDeleteItem={onDeleteItem}
                onToggleIsChecked={onToggleIsChecked}
              />
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <select
              className="flex-1 bg-white border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[rgb(41,144,255)]"
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
            >
              <option value="input">Sort by input order</option>
              <option value="status">Sort by packed status</option>
              <option value="name">Sort by name</option>
            </select>

            <button
              onClick={onClearList}
              className="flex-1 bg-gray-200 text-black py-2 px-4 rounded-md hover:bg-gray-300 transition"
            >
              Clear list
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-600">Your list is empty</p>
      )}
    </main>
  );
};

export default List;
