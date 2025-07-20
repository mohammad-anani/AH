import { route } from "@/routing/entityRoute";

export const testOrdersRoutes = route(
  "TestOrder",
  false,
  true,
  true,
  [["ID"], ({ ID }) => [ID], [2, 1]],
  [
    ["ID", "number"],
    ["AppointmentID", "number"],
    ["TestTypeID", "number"],
    ["DoctorID", "number"],
    ["OrderAt", "datetime"],
  ],
  ({ ID }) => [
    ["Show Test Appointments", `/admin/tests/appointments?TestOrderID=${ID}`],
  ],
);
