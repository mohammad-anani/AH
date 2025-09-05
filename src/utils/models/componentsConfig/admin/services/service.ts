import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";

import { adminFilterSelectorField } from "../../utils/RoleUtil";
import {
  datetimeField,
  stringField,
  uniselectField,
} from "../../utils/filterReusableFields";

import type { RouteConfig } from "../../routeConfig";
import { patient } from "../human-resources/patient";
import { receptionist } from "../human-resources/receptionist";
import { formatMoney } from "@/utils/formatters/formatMoney";
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
    Bill,
    CreatedByReceptionist,
    CreatedAt,
  }: typesObject["Service"]) => [
    [
      "Patient",
      Patient,
      `/admin/human-resources/patients/${Patient.ID}`,
      "Patient",
      patient.selectorDisplay as SelectorDisplay<EntityKey>,
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
    ["Bill", Bill ? formatMoney(Bill.Amount) : "N/A"],
    ["Paid", Bill ? formatMoney(Bill.AmountPaid) : "N/A"],
    [
      "Created By",
      CreatedByReceptionist,
      `/admin/human-resources/receptionists/${CreatedByReceptionist.ID}`,
      "Receptionist",
      receptionist.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
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
    ["Amount", "money"],
    ["AmountPaid", "money"],

    adminFilterSelectorField("ReceptionistID", "Receptionist", receptionist),

    datetimeField("CreatedAt"),
  ],
  formConfig: [
    ["Name", "Name", "string", "both"],
    ["Price", "Price", "money", "both"],
  ],
};
