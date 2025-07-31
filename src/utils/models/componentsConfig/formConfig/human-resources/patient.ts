import type { FormKey } from "@/utils/models/types/utils/Form&Filter";
import { prefixFields } from "../util";
import { personForm } from "./person";

export const patientForm: FormKey<"Patient">[] = [
  ...prefixFields<"Patient", "Person">("Person", personForm),
];
