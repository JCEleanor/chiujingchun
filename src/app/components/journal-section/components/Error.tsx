interface ErrorProps {
  message: string;
}

export const Error = ({ message }: ErrorProps) => {
  return (
    <section className="mt-20 scroll-mt-32" id="JOURNAL">
      <div className="max-w-2xl mx-auto">
        <div className="text-red-600 p-4 bg-red-50 dark:bg-red-900/20 rounded">
          <p>Error loading posts: {message}</p>
        </div>
      </div>
    </section>
  );
};
