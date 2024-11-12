import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <Badge
      className={cn(
        "rounded-full capitalize",
        status === "open" && "bg-blue-500",
        status === "paid" && "bg-green-500",
        status === "partial" && "bg-teal-300",
        status === "uncollectible" && "bg-red-500",
        status === "void" && "bg-zinc-700"
      )}
    >
      {status}
    </Badge>
  );
};

export default StatusBadge;
