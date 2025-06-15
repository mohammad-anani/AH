import H2 from "@/ui/H2";
import Clickable from "@/ui/Clickable";
import type { OptionalChildrenProps } from "@/utils/types";
import type { ReactNode } from "react";

export default function Card({
  Data,
  title,

  canEdit = true,
  backLink,
  headerWidth = 150,
  children,
}: {
  Data: ReactNode;
  title: string;
  canEdit?: boolean;
  backLink: string;
  headerWidth?: number;
} & OptionalChildrenProps) {
  return (
    <>
      <Clickable as="Link" variant="secondary" to={backLink}>
        Back
      </Clickable>
      <div className="flex items-center justify-between">
        <H2>{title}</H2>
        {canEdit ? (
          <Clickable as="Link" variant="primary" to="edit">
            Edit
          </Clickable>
        ) : null}
      </div>
      <div
        className={`grid grid-cols-[${headerWidth}px_1fr] gap-y-1 *:text-xl! *:odd:font-bold`}
      >
        {Data}
      </div>
      <div className="mt-10 flex flex-wrap gap-x-3 gap-y-2 *:text-sm!">
        {children}
      </div>
    </>
  );
}
