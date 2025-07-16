import type { DepartmentRow } from "@/utils/models/types";
import DetailsButton from "@/ui/entityComponents/DetailsButton";

export default function Row({ department }: { department: DepartmentRow }) {
  const { ID, Name, Phone } = department;
  return (
    <li className="grid grid-cols-[1fr_1fr_1fr] text-xl!">
      <span>{Name}</span>
      <span>{Phone}</span>
      <DetailsButton ID={ID} />
    </li>
  );
}
