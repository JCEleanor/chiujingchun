"use client";

import React, { useEffect, useState } from "react";
import { getHackMDNotes } from "../actions/hackmd-actions";
import type { HackMDNote } from "../interfaces";

export const JournalSection = () => {
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

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <section
        className="mt-20 scroll-mt-32 bg-background text-foreground"
        id="JOURNAL"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Journal</h2>
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
      <section
        className="mt-20 scroll-mt-32 bg-background text-foreground"
        id="JOURNAL"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Journal</h2>
          <div className="text-red-600 p-4 bg-red-50 dark:bg-red-900/20 rounded">
            <p>Error loading posts: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="mt-20 scroll-mt-32 bg-background text-foreground"
      id="JOURNAL"
    >
      <div className="max-w-2xl mx-auto">
        {notes.length === 0 ? (
          <p className="text-gray-600 dark:text-zinc-400">No posts found.</p>
        ) : (
          <div className="grid gap-6">
            {notes.map((note) => (
              <article
                key={note.id}
                className="bg-white dark:bg-zinc-900 shadow-sm hover:shadow-lg transition-shadow rounded-xl p-6 border border-zinc-200 dark:border-zinc-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    {note.title}
                  </h3>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                    {note.publishType}
                  </span>
                </div>

                <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                  <span>By {note.lastChangeUser.name}</span>
                  <span className="mx-2">•</span>
                  <span>{formatDate(note.createdAt)}</span>
                </div>

                {note.tags &&
                  note.tags.includes("work journal") &&
                  note.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {note.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                <div className="text-zinc-700 dark:text-zinc-200 line-clamp-3">
                  {note.content.length > 200
                    ? `${note.content.substring(0, 200)}...`
                    : note.content}
                </div>

                <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                    <span>Last updated: {formatDate(note.lastChangedAt)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
