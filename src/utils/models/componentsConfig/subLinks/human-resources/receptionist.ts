import type { SubLinks } from "@/utils/models/types/utils/routeTypes";

export const receptionistSubLinks: SubLinks<"Receptionist"> = ({ ID }) => [
  ["Show Appointments", `/admin/appointments?ReceptionistID=${ID}`],
  ["Show Tests Appointments", `/admin/tests/appointments?ReceptionistID=${ID}`],
  ["Show Patients", `/admin/human-resources/patients?ReceptionistID=${ID}`],
  ["Show Doctors", `/admin/human-resources/doctors?ReceptionistID=${ID}`],
  ["Show Operartions", `/admin/operations?ReceptionistID=${ID}`],
];
