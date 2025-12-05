import CartContainer from "./components/CartContainer";
import Nav from "./components/Nav";
import { useGlobalContext } from "./Context";

function App() {
  return (
    <div className="h-screen bg-blue-50">
      <Nav />
      <CartContainer />
    </div>
  );
}

export default App;
