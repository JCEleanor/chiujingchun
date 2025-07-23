interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <div className="flex items-center gap-2 mb-1">
      <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-1 border-b-2 border-b-transparent group-hover:opacity-70 group-hover:border-b-2 group-hover:border-dashed group-hover:border-zinc-900 dark:group-hover:border-zinc-100">
        {title}
      </h3>
      <svg
        className="w-4 h-4 text-zinc-900 dark:text-zinc-100 opacity-0 group-hover:opacity-100"
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
