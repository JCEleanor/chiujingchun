"use server";

import { HackMDNote } from "../interfaces";
import { fetchHackMDNotes } from "../lib/hackmd-api";

export async function getHackMDNotes(): Promise<HackMDNote[]> {
  try {
    const notes = await fetchHackMDNotes();
    return notes;
  } catch (error) {
    console.error("Error in server action:", error);
    throw error;
  }
}
