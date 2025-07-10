"use server";

import { HackMDNote } from "../interfaces";
import { fetchHackMDNotes, fetchHackMDNoteById } from "../lib/hackmd-api";

export async function getHackMDNotes(): Promise<HackMDNote[]> {
  try {
    const notes = await fetchHackMDNotes();
    return notes;
  } catch (error) {
    console.error("Error in server action:", error);
    throw error;
  }
}

export async function getHackMDNoteById(
  noteId: string
): Promise<HackMDNote | null> {
  try {
    const note = await fetchHackMDNoteById(noteId);
    return note;
  } catch (error) {
    console.error("Error in server action:", error);
    throw error;
  }
}
