export interface Position {
  lat: number;
  lng: number;
}

export interface City {
  id: string;
  cityName: string;
  country: string;
  date: string;
  notes: string;
  position: Position;
  emoji?: string;
}

export interface Country {
  country: string;
  emoji?: string;
}

export interface CitiesState {
  cities: City[];
  currentCity: City | null;
  isLoading: boolean;
  error: string;
}

export type CitiesAction =
  | { type: "loading" }
  | { type: "cities/loaded"; payload: City[] }
  | { type: "city/loaded"; payload: City }
  | { type: "city/created"; payload: City }
  | { type: "city/deleted"; payload: string }
  | { type: "rejected"; payload: string };

export interface CitiesContextType {
  cities: City[];
  isLoading: boolean;
  currentCity: City | null;
  getCity: (id: string) => Promise<void>;
  createCity: (newCity: Omit<City, "id">) => Promise<void>;
  deleteCity: (id: string) => Promise<void>;
}