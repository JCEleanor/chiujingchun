import React from "react";
import type { FeatureCollection } from "geojson";

// --- Data Types ---
interface HikePhotoBlogEntry {
  type: "photo" | "text" | "photo-text";
  photoUrl?: string;
  caption?: string;
  text?: string;
}

interface HikeStats {
  distanceKm: number;
  duration: string; // e.g., '47h 19m'
  elevationGainM: number;
  elevationLossM: number;
  avgSpeedKmh: number;
  calories: number;
}

interface Hike {
  id: string;
  title: string;
  dateRange: string;
  mapRouteGeoJson?: FeatureCollection;
  blog: HikePhotoBlogEntry[];
  stats: HikeStats;
}

// --- Mock Data ---
const mockHikes: Hike[] = [
  {
    id: "1",
    title: "四大障礙-奇萊東稜",
    dateRange: "2022/09/08 - 2022/09/12",
    mapRouteGeoJson: undefined, // To be replaced with real data/GPX
    blog: [
      {
        type: "text",
        text: "We started our hike early in the morning, spirits high and backpacks full.",
      },
      {
        type: "photo",
        photoUrl: "/personal-site.png",
        caption: "The trailhead at dawn.",
      },
      {
        type: "text",
        text: "The first section was steep, but the views were already rewarding.",
      },
      {
        type: "photo-text",
        photoUrl: "/profile.jpg",
        caption: "Taking a break",
        text: "Stopped for a quick snack and enjoyed the scenery.",
      },
      {
        type: "text",
        text: "After several hours, we reached the summit. The sense of accomplishment was incredible.",
      },
      { type: "photo", photoUrl: "/yelp-camp.png", caption: "Summit view" },
    ],
    stats: {
      distanceKm: 58.4,
      duration: "47h 19m",
      elevationGainM: 4592,
      elevationLossM: 7238,
      avgSpeedKmh: 1.23,
      calories: 11702,
    },
  },
];

const HikingJournalPage = () => {
  // For now, just use the first hike as an example
  const hike = mockHikes[0];
  return (
    <main className="min-h-screen flex flex-col items-center bg-background text-foreground py-8 px-2 md:px-0">
      <h1 className="text-4xl font-bold mb-2">Hiking Journal</h1>
      <h2 className="text-2xl font-semibold mb-1">{hike.title}</h2>
      <p className="mb-4 text-sm text-muted-foreground">{hike.dateRange}</p>

      {/* Map Section (placeholder for Mapbox) */}
      <section className="w-full max-w-3xl mb-8">
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">[Mapbox map will be here]</span>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full max-w-3xl mb-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        <Stat label="Distance" value={`${hike.stats.distanceKm} km`} />
        <Stat label="Duration" value={hike.stats.duration} />
        <Stat label="Elevation Gain" value={`${hike.stats.elevationGainM} m`} />
        <Stat label="Elevation Loss" value={`${hike.stats.elevationLossM} m`} />
        <Stat label="Avg Speed" value={`${hike.stats.avgSpeedKmh} km/h`} />
        <Stat
          label="Calories"
          value={`${hike.stats.calories.toLocaleString()} kcal`}
        />
      </section>

      {/* Photo Blog Section */}
      <section className="w-full max-w-3xl mb-8">
        {hike.blog.map((entry, idx) => {
          if (entry.type === "text") {
            return (
              <p
                key={idx}
                className="my-6 text-base md:text-lg leading-relaxed"
              >
                {entry.text}
              </p>
            );
          }
          if (entry.type === "photo") {
            return (
              <div key={idx} className="my-6 flex flex-col items-center">
                <img
                  src={entry.photoUrl}
                  alt={entry.caption || `Hike photo ${idx + 1}`}
                  className="rounded-lg object-cover w-full h-64 mb-2"
                />
                {entry.caption && (
                  <span className="text-xs text-center text-muted-foreground">
                    {entry.caption}
                  </span>
                )}
              </div>
            );
          }
          if (entry.type === "photo-text") {
            return (
              <div key={idx} className="my-6 flex flex-col items-center">
                <img
                  src={entry.photoUrl}
                  alt={entry.caption || `Hike photo ${idx + 1}`}
                  className="rounded-lg object-cover w-full h-64 mb-2"
                />
                {entry.caption && (
                  <span className="text-xs text-center text-muted-foreground mb-2">
                    {entry.caption}
                  </span>
                )}
                {entry.text && (
                  <p className="text-base md:text-lg leading-relaxed mt-2">
                    {entry.text}
                  </p>
                )}
              </div>
            );
          }
          return null;
        })}
      </section>
    </main>
  );
};

// --- Stat Component ---
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card rounded-lg p-4 flex flex-col items-center shadow-sm">
      <span className="text-lg font-bold">{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

export default HikingJournalPage;
