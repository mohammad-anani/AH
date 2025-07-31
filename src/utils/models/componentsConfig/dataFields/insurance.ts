import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { dataFields as DataFields } from "@/utils/models/types/utils/routeTypes";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

export const insurance: DataFields<"Insurance"> = ({
  ProviderName,
  Coverage,
  isActive,
  CreatedAt,
  PatientID,
  CreatedByReceptionistID,
}: typesObject["Insurance"]) => [
  [
    "Patient",
    "View Patient",
    "/admin/human-resources/patients/" + PatientID,
    "Patient",
  ],
  ["Provider", ProviderName],
  ["Coverage", Coverage * 100 + "%"],
  ["Status", isActive ? "Active" : "Inactive"],
  [
    "Created By",
    "View Receptionist",
    `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
    "Receptionist",
  ],
  ["Created At", formatDateIsoToLocal(CreatedAt)],
];
