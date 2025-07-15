interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <div className="flex items-center gap-2">
      <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-1 group-hover:opacity-70 group-hover:border-b group-hover:border-dashed group-hover:border-zinc-900 dark:group-hover:border-zinc-100 transition-all">
        {title}
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
  );
};
