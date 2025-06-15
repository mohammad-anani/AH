import type { Patient } from "../../utils/types";
import Clickable from "@/ui/Clickable";
import formatPhoneNumber from "@/utils/formatPhoneNumber";
import { Info } from "lucide-react";

export default function PatientRow({ patient }: { patient: Patient }) {
  const {
    ID,
    Person: { FirstName, MiddleName, LastName, Age, Phone },
  } = patient;
  return (
    <li className="grid grid-cols-[2fr_1fr_1fr_1fr]">
      <span>{FirstName + " " + MiddleName + " " + LastName}</span>
      <span>{Age}</span>
      <span>{formatPhoneNumber(Phone, "xx xxx xxx")}</span>

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
