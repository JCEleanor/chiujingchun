"use server";

import { HackMDNote } from "../interfaces";
import { fetchHackMDNotes, fetchHackMDNoteById } from "../lib/hackmd-api";

export async function getHackMDNotes(): Promise<HackMDNote[]> {
  try {
    const notes = await fetchHackMDNotes();
    // step 1: filter out notes that are not published
    const publishedNotes = notes.filter((note) => !!note.publishedAt);

    // step 2: sort notes by createdAt in descending order
    publishedNotes.sort((a, b) => b.createdAt - a.createdAt);

    return publishedNotes;
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
