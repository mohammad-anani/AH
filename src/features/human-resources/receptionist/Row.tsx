import type { ReceptionistRow } from "@/utils/models/types";
import DetailsButton from "@/ui/entityComponents/DetailsButton";

export default function Row({
  receptionist,
}: {
  receptionist: ReceptionistRow;
}) {
  const { ID, Name } = receptionist;
  return (
    <li className="grid grid-cols-[2fr_1fr]">
      <span>{Name}</span>
      <DetailsButton ID={ID} />
    </li>
  );
}
