import type { Patient } from "../../utils/models/types";
import DetailsButton from "@/ui/entityComponents/DetailsButton";
import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";

export default function Row({ patient }: { patient: Patient }) {
  const {
    ID,
    Person: { FirstName, MiddleName, LastName, Age, Phone },
  } = patient;
  return (
    <li className="grid grid-cols-[2fr_1fr_1fr_1fr]">
      <span>{FirstName + " " + MiddleName + " " + LastName}</span>
      <span>{Age}</span>
      <span>{formatPhoneNumber(Phone, "xx xxx xxx")}</span>
      <DetailsButton ID={ID} />
    </li>
  );
}
