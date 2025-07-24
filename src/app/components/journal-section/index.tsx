"use client";

import React from "react";
import Link from "next/link";
import { useJournalData } from "./api";
import { Loading, Error, Title, Date } from "./components";
import { Tags } from "../common/Tags";

export const JournalSection = () => {
  const { notes, loading, error } = useJournalData();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <section
      className="my-20 scroll-mt-32 h-[500px] overflow-y-scroll subtle-scrollbar"
      id="JOURNAL"
    >
      <div className="max-w-2xl mx-auto">
        {notes.length === 0 ? (
          <p className="text-gray-600 dark:text-zinc-400">No posts found.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {notes.map((note) => (
              <Link
                key={note.id}
                href={`/post/hackmd/${note.id}`}
                className="cursor-pointer group"
              >
                <Title title={note.title} />
                <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  <Date timestamp={note.createdAt} />
                  <div className="flex gap-1 ml-2">
                    <Tags tags={note.tags || []} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
