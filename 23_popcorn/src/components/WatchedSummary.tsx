import type { WatchedMovie } from "../types";

interface WatchedSummaryProps {
  watched: WatchedMovie[];
}

const WatchedSummary = ({ watched }: WatchedSummaryProps) => {
  if (!watched.length) return null;
  const avg = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;

  const avgImdb = avg(watched.map((m) => m.imdbRating)).toFixed(1);
  const avgUser = avg(watched.map((m) => m.userRating)).toFixed(1);
  const avgRuntime = avg(watched.map((m) => m.runtime)).toFixed(0);

  return (
    <div className="text-gray-300 space-y-2 mb-3">
      <h2 className="text-2xl font-bold">Movies you watched</h2>
      <div className="flex flex-wrap gap-4 text-sm">
        <p>#️⃣ {watched.length}</p>
        <p>⭐️ {avgImdb}</p>
        <p>🌟 {avgUser}</p>
        <p>⏳ {avgRuntime} min</p>
      </div>
    </div>
  );
};

export default WatchedSummary;
