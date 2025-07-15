"use client";

import React, { useEffect, useState } from "react";
import { getHackMDNotes } from "../actions/hackmd-actions";
import type { HackMDNote } from "../interfaces";
import { useRouter } from "next/navigation";

export const JournalSection = () => {
  const [notes, setNotes] = useState<HackMDNote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadingPostId, setLoadingPostId] = useState<string | null>(null);
  const router = useRouter();

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

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handlePostClick = (noteId: string) => {
    setLoadingPostId(noteId);
    router.push(`/post/hackmd/${noteId}`);
  };

  if (loading) {
    return (
      <section className="mt-20 scroll-mt-32" id="JOURNAL">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-zinc-100"></div>
            <span className="ml-3">Loading posts...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mt-20 scroll-mt-32" id="JOURNAL">
        <div className="max-w-2xl mx-auto">
          <div className="text-red-600 p-4 bg-red-50 dark:bg-red-900/20 rounded">
            <p>Error loading posts: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-20 scroll-mt-32" id="JOURNAL">
      <div className="max-w-2xl mx-auto">
        {notes.length === 0 ? (
          <p className="text-gray-600 dark:text-zinc-400">No posts found.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {notes.map((note) => (
              <div
                key={note.id}
                className="cursor-pointer group"
                onClick={() => handlePostClick(note.id)}
              >
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-1 group-hover:opacity-70 group-hover:border-b group-hover:border-dashed group-hover:border-zinc-900 dark:group-hover:border-zinc-100 transition-all">
                    {note.title}
                  </h3>
                  <svg
                    className="w-4 h-4 text-zinc-900 dark:text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                  <span>{formatDate(note.createdAt)}</span>
                  {note.tags && note.tags.length > 0 && (
                    <>
                      <span className="mx-2">*</span>
                      <span>{note.tags[0]}</span>
                    </>
                  )}
                </div>
                {loadingPostId === note.id && (
                  <div className="absolute inset-0 bg-zinc-100/80 dark:bg-zinc-900/80 flex flex-col items-center justify-center z-10 rounded-xl">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-900 dark:border-zinc-100 mb-2"></div>
                    <span className="text-zinc-700 dark:text-zinc-200">
                      Loading post...
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
