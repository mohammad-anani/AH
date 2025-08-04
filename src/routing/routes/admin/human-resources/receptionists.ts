import { route } from "@/routing/entityRoute";
import { receptionist } from "@/utils/models/componentsConfig/admin";

export const receptionistsRoutes = route(
  "Receptionist",
  true,
  true,
  true,
  receptionist,
  true,
);
