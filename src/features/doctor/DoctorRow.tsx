import type { Doctor } from "../../utils/models/types";
import DetailsButton from "@/ui/DetailsButton";

export default function DoctorRow({ doctor }: { doctor: Doctor }) {
  const {
    ID,
    Employee: {
      Person: { FirstName, MiddleName, LastName },
    },
    Specialization,
  } = doctor;
  return (
    <li className="grid grid-cols-[2fr_1fr_1fr]">
      <span>{FirstName + " " + MiddleName + " " + LastName}</span>
      <span>{Specialization}</span>
      <DetailsButton ID={ID} />
    </li>
  );
}
