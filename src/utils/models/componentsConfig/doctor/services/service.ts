import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

import {
  adminFilterSelectorField,
  adminFormSelectorField,
} from "../../utils/RoleUtil";
import {
  datetimeField,
  stringField,
  uniselectField,
} from "../../utils/filterReusableFields";
import type { RouteConfig } from "../../routeConfig";
import { patient } from "../human-resources/patient";
import { serviceStatuses } from "@/utils/models/zod/schemas";

export const service: RouteConfig<"Service"> = {
  dataFields: ({
    Patient,
    ScheduledDate,
    ActualStartingDate,
    Reason,
    Result,
    ResultDate,
    Status,
    Notes,
  }: typesObject["Service"]) => [
    [
      "Patient",
      Patient,
      `/admin/human-resources/patients/${Patient.ID}`,
      "Patient",
      patient.selectorDisplay(Patient),
    ],
    ["Scheduled Date", formatDateIsoToLocal(ScheduledDate)],
    [
      "Actual Starting Date",
      ActualStartingDate ? formatDateIsoToLocal(ActualStartingDate) : "N/A",
    ],
    ["Reason", Reason],
    ["Status", Status],
    ["Result", Result || "N/A"],
    ["Result Date", ResultDate ? formatDateIsoToLocal(ResultDate) : "N/A"],
    ["Notes", Notes?.length ? Notes : "N/A"],
  ],
  filterFields: [
    adminFilterSelectorField("Patient", "Patient", patient),
    datetimeField("ScheduledDate"),
    datetimeField("ActualStartingDate"),
    stringField("Reason"),
    uniselectField("Status", serviceStatuses as unknown as string[]),
    stringField("Result"),
    datetimeField("ResultDate"),
    stringField("Notes"),
  ],
};
