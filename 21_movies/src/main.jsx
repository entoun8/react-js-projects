import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MovieContextProvider } from "./contexts/MovieContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </StrictMode>
);
