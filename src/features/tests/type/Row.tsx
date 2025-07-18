import DetailsButton from "@/ui/entityComponents/DetailsButton";
import type { TestTypeRow } from "@/utils/models/types";

export default function Row({ type }: { type: TestTypeRow }) {
  const { ID, Name, DepartmentName } = type;

  return (
    <li className="grid grid-cols-3">
      <span>{Name}</span>
      <span>{DepartmentName}</span>
      <DetailsButton ID={ID} />
    </li>
  );
}
