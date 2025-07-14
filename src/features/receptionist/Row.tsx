import type { Receptionist } from "../../utils/models/types";
import DetailsButton from "@/ui/entityComponents/DetailsButton";

export default function Row({ receptionist }: { receptionist: Receptionist }) {
  const {
    ID,
    Employee: {
      Person: { FirstName, MiddleName, LastName },
    },
  } = receptionist;
  return (
    <li className="grid grid-cols-[2fr_1fr]">
      <span>{FirstName + " " + MiddleName + " " + LastName}</span>
      <DetailsButton ID={ID} />
    </li>
  );
}
