"use server";

import { fetchHackMDNotes, type HackMDNote } from "../lib/hackmd-api";

export async function getHackMDNotes(): Promise<HackMDNote[]> {
  try {
    const notes = await fetchHackMDNotes();
    return notes;
  } catch (error) {
    console.error("Error in server action:", error);
    throw error;
  }
}
