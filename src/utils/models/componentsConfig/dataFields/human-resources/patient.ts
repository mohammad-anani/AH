import { person } from "./person";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { DataFields as DataFields } from "@/utils/models/types/utils/routeTypes";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

export const patient: DataFields<"Patient"> = ({
  Person,
  CreatedByReceptionistID,
  CreatedAt,
}: typesObject["Patient"]) => [
  ...person(Person),
  [
    "Created By",
    "View Receptionist",
    `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
    "Receptionist",
  ],
  ["Created At", formatDateIsoToLocal(CreatedAt)],
];
