import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { dataFields as DataFields } from "@/utils/models/types/utils/routeTypes";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

export const testAppointment: DataFields<"TestAppointment"> = ({
  TestOrderID,
  PatientID,
  ScheduledDate,
  Status,
  Result,
  ResultDate,
  CreatedByReceptionistID,
  CreatedAt,
}: typesObject["TestAppointment"]) => [
  TestOrderID
    ? [
        "Test Order",
        "View Test Order",
        `/admin/tests/orders/${TestOrderID}`,
        "TestOrder",
      ]
    : ["Test Order", "None"],
  [
    "Patient",
    "View Patient",
    `/admin/human-resources/patients/${PatientID}`,
    "Patient",
  ],
  ["Scheduled Date", formatDateIsoToLocal(ScheduledDate)],
  ["Status", Status],
  ["Result", Result],
  ["Result Date", ResultDate ? formatDateIsoToLocal(ResultDate) : "N/A"],
  [
    "Created By",
    "View Receptionist",
    `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
    "Receptionist",
  ],
  ["Created At", formatDateIsoToLocal(CreatedAt)],
];
