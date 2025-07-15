export const formatDate = (
  timestamp: number,
  monthFormat: "short" | "long" = "short"
) => {
  return new Date(timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: monthFormat,
    day: "numeric",
  });
};
