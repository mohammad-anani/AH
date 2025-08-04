import { route } from "@/routing/entityRoute";
import { doctor } from "@/utils/models/componentsConfig/admin";

export const doctorsRoutes = route("Doctor", true, true, true, doctor, true);
