"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { HackMDNote } from "../interfaces";

interface PostPageProps {
  note: HackMDNote;
}

export const PostPage: React.FC<PostPageProps> = ({ note }) => {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        {/* TODO: add go back button */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              {note.title}
            </h1>
          </div>

          <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400 mb-4">
            <span>By {note.lastChangeUser.name}</span>
            <span className="mx-2">•</span>
            <span>Created: {formatDate(note.createdAt)}</span>
            <span className="mx-2">•</span>
            <span>Updated: {formatDate(note.lastChangedAt)}</span>
          </div>

          {note.tags && note.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {note.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3 mt-6">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2 mt-4">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 mb-4 space-y-1">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-zinc-700 dark:text-zinc-300 mb-4 space-y-1">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-zinc-700 dark:text-zinc-300">{children}</li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-zinc-300 dark:border-zinc-600 pl-4 italic text-zinc-600 dark:text-zinc-400 mb-4">
                  {children}
                </blockquote>
              ),
              code: ({ children, className }) => {
                const isInline = !className;
                if (isInline) {
                  return (
                    <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 px-1 py-0.5 rounded text-sm">
                      {children}
                    </code>
                  );
                }
                return (
                  <code className="block bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 p-4 rounded-lg text-sm overflow-x-auto">
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => (
                <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg overflow-x-auto mb-4">
                  {children}
                </pre>
              ),
              a: ({ children, href }) => (
                <a
                  href={href}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em className="italic text-zinc-700 dark:text-zinc-300">
                  {children}
                </em>
              ),
            }}
          >
            {note.content}
          </ReactMarkdown>
        </article>
        {/* TODO: add go to top */}
      </div>
    </div>
  );
};
