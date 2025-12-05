import Questions from "./components/Questions";

function App() {
  return (
    <div className=" bg-purple-950 min-h-screen flex justify-center">
      <div className="bg-white w-[1000px] my-16 mx-3 p-6 rounded-lg flex gap-4">
        <h1 className="font-semibold text-xl">
          Questions And Answers About Login
        </h1>
        <Questions />
      </div>
    </div>
  );
}

export default App;
