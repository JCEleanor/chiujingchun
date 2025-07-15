"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useJournalData } from "./api";
import { Loading, Error, Title, Date, Tags } from "./components";

export const JournalSection = () => {
  const { notes, loading, error } = useJournalData();
  const [loadingPostId, setLoadingPostId] = useState<string | null>(null);
  const router = useRouter();

  const handlePostClick = (noteId: string) => {
    setLoadingPostId(noteId);
    router.push(`/post/hackmd/${noteId}`);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
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
                <Title title={note.title} />
                <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                  <Date timestamp={note.createdAt} />
                  <Tags tags={note.tags || []} />
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
