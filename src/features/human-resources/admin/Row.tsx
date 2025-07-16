import type { Admin } from "../../../utils/models/types";
import DetailsButton from "@/ui/entityComponents/DetailsButton";

export default function Row({ admin }: { admin: Admin }) {
  const {
    ID,
    Employee: {
      Person: { FirstName, MiddleName, LastName },
    },
  } = admin;
  return (
    <li className="grid grid-cols-[2fr_1fr]">
      <span>{FirstName + " " + MiddleName + " " + LastName}</span>
      <DetailsButton ID={ID} />
    </li>
  );
}
