import { useEffect, useState } from "react";
import { getHackMDNotes } from "../../actions/hackmd-actions";
import type { HackMDNote } from "../../interfaces";

export const useJournalData = () => {
  const [notes, setNotes] = useState<HackMDNote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const fetchedNotes = await getHackMDNotes();
        setNotes(fetchedNotes);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch notes");
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return { notes, loading, error };
};
