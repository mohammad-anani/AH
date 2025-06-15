import type { Admin } from "../../utils/types";
import Clickable from "@/ui/Clickable";
import { Info } from "lucide-react";

export default function AdminRow({ admin }: { admin: Admin }) {
  const {
    ID,
    Employee: {
      Person: { FirstName, MiddleName, LastName },
    },
  } = admin;
  return (
    <li className="grid grid-cols-[2fr_1fr]">
      <span>{FirstName + " " + MiddleName + " " + LastName}</span>
      <Clickable
        className="flex! items-center gap-x-1"
        as="Link"
        variant="secondary"
        to={`${ID}`}
      >
        <Info className="*:text-primary! h-[20px] w-[20px]" />
        Details
      </Clickable>
    </li>
  );
}
