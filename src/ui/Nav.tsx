import type { ChildrenProps } from "@/utils/models/types";

export default function Nav({ children }: ChildrenProps) {
  return (
    <div className="bg-primary flex h-full justify-end rounded-none! px-[20px] py-[10px]">
      <nav className="flex flex-wrap items-center justify-start gap-x-7 gap-y-1">
        {children}
      </nav>
    </div>
  );
}
