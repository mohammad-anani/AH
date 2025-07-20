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
  () => [], // No sublinks in Card
);
