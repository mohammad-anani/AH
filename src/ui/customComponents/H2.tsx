import type { ChildrenProps } from "@/utils/models/types";

export default function H2({
  children,
  className = "",
}: ChildrenProps & { className?: string }) {
  return <h2 className={"text-primary! text-4xl " + className}>{children}</h2>;
}
