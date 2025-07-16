import type { DoctorRow } from "@/utils/models/types";
import DetailsButton from "@/ui/entityComponents/DetailsButton";

export default function Row({ doctor }: { doctor: DoctorRow }) {
  const { ID, Name, Specialization } = doctor;
  return (
    <li className="grid grid-cols-[2fr_1fr_1fr]">
      <span>{Name}</span>
      <span>{Specialization}</span>
      <DetailsButton ID={ID} />
    </li>
  );
}
