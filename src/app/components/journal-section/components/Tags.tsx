import React from "react";

interface TagsProps {
  tags: string[];
}

export const Tags = ({ tags }: TagsProps) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex gap-1 ml-2">
      {tags.map((tag) => (
        <span
          className="px-2 py-1 border border-white text-xs rounded-full text-white inline-block"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
