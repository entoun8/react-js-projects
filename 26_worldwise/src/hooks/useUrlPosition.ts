import { useSearchParams } from "react-router";

export const useUrlPosition = (): [number, number] => {
  const [searchParams] = useSearchParams();

  const lat = Number(searchParams.get("lat"));
  const lng = Number(searchParams.get("lng"));

  return [lat, lng];
};
