import type { GeocodingResult } from '../types';

export async function getAddress({ latitude, longitude }: { latitude: number; longitude: number }): Promise<GeocodingResult> {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data: GeocodingResult = await res.json();
  return data;
}
