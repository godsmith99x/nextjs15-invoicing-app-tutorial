import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Result } from "postcss";

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <Badge
      className={cn(
        "rounded-full",
        status === "draft" && "bg-blue-500",
        status === "open" && "bg-blue-500",
        status === "paid" && "bg-green-500",
        status === "partial" && "bg-blue-500",
        status === "refunded" && "bg-blue-500",
        status === "sent" && "bg-blue-500",
        status === "uncollectible" && "bg-red-500",
        status === "void" && "bg-zinc-700"
      )}
    >
      {status}
    </Badge>
  );
};

export default StatusBadge;
