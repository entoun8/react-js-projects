import { createContext, useContext, useEffect, useReducer, type ReactNode } from "react";
import type { City, CitiesState, CitiesAction, CitiesContextType } from "../types";

const CitiesContext = createContext<CitiesContextType | undefined>(undefined);
const BASE_URL = "http://localhost:9000/cities";

interface CitiesProviderProps {
  children: ReactNode;
}

export const CitiesProvider = ({ children }: CitiesProviderProps) => {
  const reducer = (state: CitiesState, action: CitiesAction): CitiesState => {
    switch (action.type) {
      case "loading":
        return { ...state, isLoading: true };
      case "cities/loaded":
        return { ...state, isLoading: false, cities: action.payload };
      case "city/loaded":
        return { ...state, isLoading: false, currentCity: action.payload };
      case "city/created":
        return {
          ...state,
          isLoading: false,
          cities: [...state.cities, action.payload],
          currentCity: action.payload,
        };
      case "city/deleted":
        return {
          ...state,
          isLoading: false,
          cities: state.cities.filter((city) => city.id !== action.payload),
          currentCity: null,
        };
      case "rejected":
        return { ...state, isLoading: false, error: action.payload };
      default:
        throw new Error("Unknown action type");
    }
  };

  const initialState: CitiesState = {
    cities: [],
    currentCity: null,
    isLoading: false,
    error: "",
  };

  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchCities = async () => {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(`${BASE_URL}`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading cities...",
        });
      }
    };
    fetchCities();
  }, []);

  const getCity = async (id: string): Promise<void> => {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}/${id}`);
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading the city...",
      });
    }
  };

  const createCity = async (newCity: Omit<City, "id">): Promise<void> => {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      dispatch({ type: "city/created", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading the city...",
      });
    }
  };

  const deleteCity = async (id: string): Promise<void> => {
    try {
      dispatch({ type: "loading" });
      await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "city/deleted", payload: id });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading the city...",
      });
    }
  };

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

export const useCities = (): CitiesContextType => {
  const context = useContext(CitiesContext);

  if (context === undefined) {
    throw new Error("useCities must be used within a CitiesProvider");
  }

  return context;
};
