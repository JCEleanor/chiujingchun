import { formatDate } from "../../../utils";

interface DateProps {
  timestamp: number;
}

export const Date = ({ timestamp }: DateProps) => {
  return <span>{formatDate(timestamp)}</span>;
};
