import { useEffect, useState } from "react";
import Alert from "./Component/Alert";
import List from "./Component/List";

function App() {
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState(false);
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [alert]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setAlert(true);
    } else if (name && isEditing) {
      {
        setList((oldList) => {
          return oldList.map((item) => {
            if (item.id === editId) {
              return { ...item, title: name };
            }
            return item;
          });
        });
        setName("");
      }
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList((oldList) => {
        return [...oldList, newItem];
      });
      setName("");
      console.log(list);
    }
  };

  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const editItem = (id) => {
    setIsEditing(true);
    const currentItem = list.find((item) => item.id === id);
    setName(currentItem.title);
    setEditId(id);
  };

  return (
    <section className="bg-blue-50 h-screen flex justify-center items-center">
      <div className="bg-white py-16 px-12 w-2/3 rounded-lg">
        <form action="" onSubmit={onSubmit} className="mb-5">
          {alert.show && <Alert />}
          {alert ? <Alert /> : ""}
          <h1 className="text-center font-semibold text-2xl mb-4">
            Grocery Bud
          </h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 bg-blue-100 w-[80%]"
            placeholder="ex. eggs"
          />
          <button type="submit" className="p-2 bg-blue-300 w-[20%]">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </form>
        <List list={list} deleteItem={deleteItem} editItem={editItem} />
        {list.length > 0 ? (
          <button
            onClick={() => setList([])}
            className="text-center block w-full text-red-600 font-semibold"
          >
            Clear All
          </button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default App;
