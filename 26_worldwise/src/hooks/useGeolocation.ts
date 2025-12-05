import { useState } from "react";
import type { Position } from "../types";

interface UseGeolocationReturn {
  position: Position | null;
  isLoading: boolean;
  error: string | null;
  getPosition: () => void;
}

export function useGeolocation(defaultPosition: Position | null = null): UseGeolocationReturn {
  const [position, setPosition] = useState<Position | null>(defaultPosition);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  function getPosition(): void {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos: GeolocationPosition) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (err: GeolocationPositionError) => {
        setError(err.message);
        setIsLoading(false);
      }
    );
  }

  return { position, isLoading, error, getPosition };
}
