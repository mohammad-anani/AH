import { Info } from "lucide-react";
import Clickable from "./Clickable";

export default function DetailsButton({ ID }: { ID: number }) {
  return (
    <Clickable
      className="flex! items-center gap-x-1"
      as="Link"
      variant="secondary"
      to={`${ID}`}
    >
      <Info className="*:text-primary! h-[20px] w-[20px]" />
      Details
    </Clickable>
  );
}
