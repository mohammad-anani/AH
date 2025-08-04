import { route } from "@/routing/entityRoute";
import { admin } from "@/utils/models/componentsConfig/admin";

export const adminsRoutes = route("Admin", true, true, true, admin, true);
