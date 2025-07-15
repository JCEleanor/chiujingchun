"use client";

import React from "react";
import Link from "next/link";
import { useJournalData } from "./api";
import { Loading, Error, Title, Date, Tags } from "./components";

export const JournalSection = () => {
  const { notes, loading, error } = useJournalData();

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
              <Link
                key={note.id}
                href={`/post/hackmd/${note.id}`}
                className="cursor-pointer group transition-colors duration-150"
              >
                <Title title={note.title} />
                <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                  <Date timestamp={note.createdAt} />
                  <Tags tags={note.tags || []} />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
