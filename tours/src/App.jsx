import { useEffect, useState } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const url =
    "https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project";

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="flex justify-center min-h-screen bg-blue-50">
      <div className="my-8 mx-4 w-96">
        {tours.length > 0 ? (
          <h1 className="font-bold text-4xl mb-8 text-center">Our Tours</h1>
        ) : (
          <>
            <h1 className="font-bold text-4xl mb-8 text-center">
              No Tours Left
            </h1>
            <button
              className="bg-blue-400 text-white rounded-md py-1 px-4 block mx-auto text-2xl"
              onClick={() => fetchData()}
            >
              Refresh
            </button>
          </>
        )}
        <Tours tours={tours} handleDelete={handleDelete} />
      </div>
    </main>
  );
}

export default App;
