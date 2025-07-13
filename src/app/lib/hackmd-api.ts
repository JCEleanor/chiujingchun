import NodeCache from "node-cache";
import { hackMDCacheTime } from "../constants/general";
import { HackMDNote } from "../interfaces";

const cache = new NodeCache({ stdTTL: hackMDCacheTime }); // 24 hours in seconds

// Generic function to handle HackMD API calls with caching
async function fetchHackMD<T>({
  endpoint,
  cacheKey,
  options = {},
}: {
  endpoint: string;
  cacheKey: string;
  options?: { returnNullOn404?: boolean };
}): Promise<T | null> {
  // step 1: check cache first
  const cached = cache.get<T>(cacheKey);
  if (cached) {
    return cached;
  }

  // step 2: determine base URL based on environment
  const isUseMockData = process.env.USE_MOCK_DATA === "true";
  const baseUrl = isUseMockData
    ? "http://localhost:3000/api/mock"
    : "https://api.hackmd.io/v1";

  // step 3: prepare request options with same headers for both modes
  const requestOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      Authorization: isUseMockData
        ? "Bearer mock-token"
        : `Bearer ${process.env.HACKMD_API_KEY}`,
    },
  };

  // Validate API key for real API calls
  if (!isUseMockData && !process.env.HACKMD_API_KEY) {
    throw new Error("HACKMD_API_KEY environment variable is not set");
  }

  // step 4: make the request
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, requestOptions);

    if (!response.ok) {
      if (options?.returnNullOn404 && response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: T = await response.json();

    // Cache the result (for both mock and real data)
    cache.set(cacheKey, data);
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${baseUrl}${endpoint}:`, error);
    throw error;
  }
}

export async function fetchHackMDNotes(): Promise<HackMDNote[]> {
  return (
    (await fetchHackMD<HackMDNote[]>({
      endpoint: "/notes",
      cacheKey: "hackmd_notes",
    })) || []
  );
}

export async function fetchHackMDNoteById(
  noteId: string
): Promise<HackMDNote | null> {
  return await fetchHackMD<HackMDNote>({
    endpoint: `/notes/${noteId}`,
    cacheKey: `hackmd_note_${noteId}`,
    options: {
      returnNullOn404: true,
    },
  });
}
