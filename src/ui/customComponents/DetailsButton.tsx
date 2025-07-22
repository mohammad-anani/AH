import { Info } from "lucide-react";
import Clickable from "../customComponents/Clickable";

export default function DetailsButton({
  ID,
  link,
}: {
  ID: number;
  link?: string;
}) {
  return (
    <Clickable
      className="flex! items-center gap-x-1"
      as="Link"
      variant="secondary"
      to={`${link ? link + "/" : ""}${ID}`}
    >
      <Info className="*:text-primary! h-[20px] w-[20px]" />
      Details
    </Clickable>
  );
}
