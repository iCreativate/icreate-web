import { STATUS_COPY, type AppStatus } from "@/lib/apps";

export function StatusBadge({
  status,
  size = "md",
}: {
  status: AppStatus | "none";
  size?: "sm" | "md";
}) {
  if (status === "none") {
    return (
      <span className={`badge badge-none ${size === "sm" ? "text-[10px]" : ""}`}>
        None yet
      </span>
    );
  }
  const copy = STATUS_COPY[status];
  return (
    <span
      className={`badge badge-${status} ${size === "sm" ? "text-[10px]" : ""}`}
      title={copy.meaning}
    >
      {copy.label}
    </span>
  );
}
