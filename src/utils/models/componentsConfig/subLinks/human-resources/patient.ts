import type { SubLinks } from "@/utils/models/types/utils/routeTypes";

export const patientSubLinks: SubLinks<"Patient"> = ({ ID }) => [
  ["Show Appointments", `/admin/appointments?PatientID=${ID}`],
  ["Show Tests Appointments", `/admin/tests/appointments?PatientID=${ID}`],
  ["Show Operations", `/admin/operations?PatientID=${ID}`],
  ["Show Insurances", `/admin/insurances?PatientID=${ID}`],
];
