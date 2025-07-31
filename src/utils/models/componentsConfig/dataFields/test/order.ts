import type { dataFields as DataFields } from "@/utils/models/types/utils/routeTypes";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

export const testOrder: DataFields<"TestOrder"> = ({
  TestTypeID,
  AppointmentID,
}: typesObject["TestOrder"]) => [
  ["Test Type", "View Type", "/admin/tests/types/" + TestTypeID, "TestType"],
  [
    "Appointment",
    "View Appointment",
    "/admin/appointments/" + AppointmentID,
    "TestType",
  ],
];
