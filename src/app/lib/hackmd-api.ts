import NodeCache from "node-cache";
import { hackMDCacheTime } from "../constants/general";
import { HackMDNote } from "../interfaces";

const cache = new NodeCache({ stdTTL: hackMDCacheTime }); // 24 hours in seconds

export async function fetchHackMDNotes(): Promise<HackMDNote[]> {
  const cacheKey = "hackmd_notes";
  const cached = cache.get<HackMDNote[]>(cacheKey);
  if (cached) {
    console.log("Using cached result");

    return cached;
  }

  const apiKey = process.env.HACKMD_API_KEY;

  if (!apiKey) {
    throw new Error("HACKMD_API_KEY environment variable is not set");
  }

  try {
    const response = await fetch("https://api.hackmd.io/v1/notes", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: HackMDNote[] = await response.json();
    cache.set(cacheKey, data);
    return data;
  } catch (error) {
    console.error("Error fetching HackMD notes:", error);
    throw error;
  }
}
