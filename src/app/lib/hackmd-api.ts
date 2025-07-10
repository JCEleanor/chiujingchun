import NodeCache from "node-cache";
import { hackMDCacheTime } from "../constants/general";
import { HackMDNote } from "../interfaces";

const cache = new NodeCache({ stdTTL: hackMDCacheTime }); // 24 hours in seconds

// Generic function to handle HackMD API calls with caching
async function fetchHackMD<T>(
  endpoint: string,
  cacheKey: string,
  options?: { returnNullOn404?: boolean }
): Promise<T | null> {
  // step 1: check cache first
  const cached = cache.get<T>(cacheKey);
  if (cached) {
    return cached;
  }

  // step 2: validate API key
  const apiKey = process.env.HACKMD_API_KEY;
  if (!apiKey) {
    throw new Error("HACKMD_API_KEY environment variable is not set");
  }

  try {
    const response = await fetch(`https://api.hackmd.io/v1${endpoint}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (options?.returnNullOn404 && response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: T = await response.json();
    cache.set(cacheKey, data);
    return data;
  } catch (error) {
    // TODO: step 3: handle error ui
    console.error(`Error fetching HackMD data from ${endpoint}:`, error);
    throw error;
  }
}

export async function fetchHackMDNotes(): Promise<HackMDNote[]> {
  return (await fetchHackMD<HackMDNote[]>("/notes", "hackmd_notes")) || [];
}

export async function fetchHackMDNoteById(
  noteId: string
): Promise<HackMDNote | null> {
  return await fetchHackMD<HackMDNote>(
    `/notes/${noteId}`,
    `hackmd_note_${noteId}`,
    {
      returnNullOn404: true,
    }
  );
}
