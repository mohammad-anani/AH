import type { dataFields as DataFields } from "@/utils/models/types/utils/routeTypes";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

export const appointment: DataFields<"Appointment"> = ({
  PatientID,
  DoctorID,
  Time,
  Reason,
  Status,
  Notes,
  CreatedByReceptionistID,
  CreatedAt,
}: typesObject["Appointment"]) => [
  [
    "Patient",
    "View Patient",
    `/admin/human-resources/patients/${PatientID}`,
    "Patient",
  ],
  [
    "Doctor",
    "View Doctor",
    `/admin/human-resources/doctors/${DoctorID}`,
    "Doctor",
  ],
  ["Time", Time],
  ["Reason", Reason],
  ["Status", Status],
  ["Notes", Notes],
  [
    "Receptionist",
    "View Receptionist",
    `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
    "Receptionist",
  ],
  ["Created At", formatDateIsoToLocal(CreatedAt)],
];
