import { route } from "@/routing/entityRoute";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

export const testAppointmentsRoutes = route(
  "TestAppointment",
  false,
  true,
  true,
  [
    ["Patient", "Test", "Date"],
    ({ PatientName, TestName, Date }) => [
      PatientName,
      TestName,
      formatDateIsoToLocal(Date),
    ],
    [1, 1, 1],
  ],
  [
    ["TestOrderID", "number"],
    ["PatientID", "number"],
    ["ScheduledDate", "datetime"],
    ["Status", "select", ["Cancelled", "Accepted"]],
    ["Result", "string"],
    ["ResultDate", "datetime"],
    ["ReceptionistID", "number"],
    ["CreatedAt", "datetime"],
  ],
  () => [],
  ({
    TestOrderID,
    PatientID,
    ScheduledDate,
    Status,
    Result,
    ResultDate,
    CreatedByReceptionistID,
    CreatedAt,
  }) => [
    TestOrderID
      ? ["Test Order", "View Test Order", `/admin/tests/orders/${TestOrderID}`]
      : ["Test Order", "None"],

    ["Patient", "View Patient", `/admin/human-resources/patients/${PatientID}`],
    ["Scheduled Date", ScheduledDate],
    ["Status", Status],
    ["Result", Result],
    ["Result Date", ResultDate || "N/A"],
    [
      "Created By",
      "View Receptionist",
      `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
    ],
    ["Created At", CreatedAt],
  ],
);
