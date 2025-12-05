import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";
import type { ItemType } from "./types";

function App() {
  const [items, setItems] = useState<ItemType[]>([]);
  const [orderBy, setOrderBy] = useState("input");

  const handleAddItem = (name: string, number: number) => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        number,
        isChecked: false,
        addedAt: Date.now(),
      },
    ]);
  };

  const handleDeleteItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleToggleIsChecked = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleClearList = () => {
    setItems([]);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (orderBy === "status") {
      return Number(a.isChecked) - Number(b.isChecked);
    }
    if (orderBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return a.addedAt - b.addedAt;
  });

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center px-4 py-6 space-y-6">
      <Header />
      <Form onAddItem={handleAddItem} />
      <List
        items={sortedItems}
        onDeleteItem={handleDeleteItem}
        onToggleIsChecked={handleToggleIsChecked}
        onClearList={handleClearList}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
