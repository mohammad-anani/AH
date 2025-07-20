import type { PatientRow } from "@/utils/models/types";
import DetailsButton from "@/ui/customComponents/DetailsButton";

export default function Row({ patient }: { patient: PatientRow }) {
  const { ID, Name, Age, Phone } = patient;
  return (
    <li className="grid grid-cols-[2fr_1fr_1fr_1fr]">
      <span>{Name}</span>
      <span>{Age}</span>
      <span>{Phone}</span>
      <DetailsButton ID={ID} />
    </li>
  );
}
