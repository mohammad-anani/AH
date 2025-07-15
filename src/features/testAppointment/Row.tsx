import DetailsButton from "@/ui/entityComponents/DetailsButton";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { TestAppointmentRow } from "@/utils/models/types";

export default function Row({
  appointment,
}: {
  appointment: TestAppointmentRow;
}) {
  const { ID, PatientName, TestName, Date } = appointment;

  return (
    <li className="grid grid-cols-[1fr_1fr_1fr_1fr]">
      <span>{PatientName}</span>
      <span>{TestName}</span>
      <span>{formatDateIsoToLocal(Date)}</span>
      <DetailsButton ID={ID} />
    </li>
  );
}
