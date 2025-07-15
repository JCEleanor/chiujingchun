interface TagsProps {
  tags: string[];
}

export const Tags = ({ tags }: TagsProps) => {
  if (!tags || tags.length === 0) return null;

  return (
    <>
      <span className="mx-2">*</span>
      <span>{tags[0]}</span>
    </>
  );
};
