import React from "react";

interface TagsProps {
  tags: string[];
}

export const Tags = ({ tags }: TagsProps) => {
  if (!tags || tags.length === 0) return null;

  return tags.map((tag) => (
    <span
      className="px-2 py-1 border border-white text-xs rounded-full text-white inline-block"
      key={tag}
    >
      {tag}
    </span>
  ));
};
