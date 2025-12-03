import type { ChildrenProps } from "@/utils/models/types/utils/basics";

export default function Nav({ children, count = 5 }: ChildrenProps & { count: number }) {

  const shouldWrapHeader = count > 4;


  return (
    <div className={"bg-primary flex h-[72px] overflow-clip justify-end rounded-none! px-[20px] py-[10px] " + (shouldWrapHeader ? " max-[570px]:*:gap-y-[10px] max-[570px]:hover:h-[108px] " : "")}>
      <nav className="flex flex-wrap items-center justify-start gap-x-7 gap-y-1">
        {children}
      </nav>
    </div>
  );
}
