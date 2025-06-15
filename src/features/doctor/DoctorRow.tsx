import { Info } from "lucide-react";
import type { Doctor } from "../../utils/types";
import Clickable from "@/ui/Clickable";

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
