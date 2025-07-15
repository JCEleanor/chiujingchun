export const Loading = () => {
  return (
    <section className="mt-20 scroll-mt-32" id="JOURNAL">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-zinc-100"></div>
          <span className="ml-3">Loading posts...</span>
        </div>
      </div>
    </section>
  );
};
