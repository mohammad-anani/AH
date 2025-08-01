import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { DataFields as DataFields } from "@/utils/models/types/utils/routeTypes";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

export const operation: DataFields<"Operation"> = (
  operation: typesObject["Operation"],
) => [
  ["Name", operation.Name],
  ["Description", operation.Description],

  [
    "Patient",
    "View Patient",
    `/admin/human-resources/patients/${operation.PatientID}`,
    "Patient",
  ],
  [
    "Department",
    "View Department",
    `/admin/departments/${operation.DepartmentID}`,
    "Department",
  ],
  ["Scheduled Date", formatDateIsoToLocal(operation.ScheduledDate)],
  ["Status", operation.Status],
  [
    "Payment",
    operation.PaymentID ? "View Payment" : "N/A",
    operation.PaymentID ? `/admin/payments/${operation.PaymentID}` : "",
  ],
  [
    "Created By",
    "View Receptionist",
    `/admin/human-resources/receptionists/${operation.CreatedByReceptionistID}`,
    "Receptionist",
  ],
  ["Created At", formatDateIsoToLocal(operation.CreatedAt)],
];
