import H2 from "@/ui/H2";
import Clickable from "@/ui/Clickable";
import type { OptionalChildrenProps } from "@/utils/types";

export default function AddUpdateForm({
  title,
  backLink,
  headerWidth = 150,
  children,
}: {
  title: string;
  backLink: string;
  headerWidth?: number;
} & OptionalChildrenProps) {
  return (
    <>
      <Clickable
        className="text-sm!"
        as="Link"
        variant="secondary"
        to={backLink}
      >
        Back
      </Clickable>

      <H2 className="mb-6">{title}</H2>

      <form
        className={`grid grid-cols-[${headerWidth}px_1fr] gap-y-3 *:text-xl! *:odd:font-bold`}
      >
        {children}
        <Clickable className="col-span-2 mt-10" as="button" variant="primary">
          Save
        </Clickable>
      </form>
    </>
  );
}
