import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import ProductPage from "./pages/ProductPage";
import SharedLayout from "./components/SharedLayout";
import AppPage from "./pages/AppPage";
import CitiesList from "./components/CitiesList";
import CountriesList from "./components/CountriesList";
import City from "./components/City";
import Form from "./components/Form";

function App(): React.ReactElement {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/product" element={<ProductPage />} />
          </Route>
          <Route path="/app" element={<AppPage />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CitiesList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountriesList />} />
            <Route path="form" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
