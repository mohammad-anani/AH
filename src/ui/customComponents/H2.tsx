import type { ChildrenProps } from "@/utils/models/types/utils/basics";

type H2Props = ChildrenProps & { className?: string };

export default function H2({ children, className = "" }: H2Props) {
  return <h2 className={"text-primary! text-4xl " + className}>{children}</h2>;
}
