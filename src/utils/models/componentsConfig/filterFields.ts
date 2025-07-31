// filterFields.ts

import type {
  dataFields as DataFields,
  EntityKey,
  Key,
  RowTemplate,
  SelectorConfig,
} from "@/utils/models/types/util";
import { DepartmentSelectCallBack } from "@/features/department/departmentSelectCallback";
import { CountrySelectCallBack } from "@/features/Country/CountrySelectCallback";
import { selectorConfig } from "./selectorConfig";
import { rowTemplates } from "./rowTemplates";
import { dataFields } from "./dataFields";

// ------------------------
// Field Builders
// ------------------------

const stringField = (label: string): Key => [label, "string"];
const numberField = (label: string): Key => [label, "number"];
const phoneField = (label: string): Key => [label, "phone"];
const emailField = (label: string): Key => [label, "email"];
const dateField = (label: string): Key => [label, "date"];
const datetimeField = (label: string): Key => [label, "datetime"];
const timeField = (label: string): Key => [label, "time"];
const moneyField = (label: string): Key => [label, "money"];
const booleanField = (
  label: string,
  labels: [string, string, string?],
): Key => [label, "boolean", labels];

const uniselectField = (label: string, values: string[]): Key => [
  label,
  "uniselect",
  values,
];
const multiselectField = (label: string, values: string[]): Key => [
  label,
  "multiselect",
  values,
];

// ------------------------
// Lazy selectorField (with lazy filterFields)
// ------------------------

const selectorField = (fieldKey: string, entity: EntityKey): Key => [
  fieldKey,
  "selector",
  [
    entity,
    selectorConfig[entity] as SelectorConfig<EntityKey>,
    rowTemplates[entity] as RowTemplate<EntityKey>,
    dataFields[entity] as DataFields<EntityKey>,
    () => getFilterFields()[entity], // lazy call
  ],
];

// ------------------------
// Shared Field Groups
// ------------------------

const personFields: Key[] = [
  stringField("FirstName"),
  stringField("MiddleName"),
  stringField("LastName"),
  booleanField("Gender", ["Male", "Female", "All"]),
  numberField("Age"),
  phoneField("Phone"),
  emailField("Email"),
  ["CountryName", "custom", CountrySelectCallBack],
  stringField("Username"),
];

const employeeFields: Key[] = [
  ["Department", "custom", DepartmentSelectCallBack],
  moneyField("Salary"),
  dateField("HireDate"),
  dateField("LeaveDate"),
  booleanField("isActive", ["Active", "Not Active", "All"]),
  multiselectField("WorkingDays", [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]),
  timeField("ShiftStart"),
  timeField("ShiftEnd"),
];

type CreatorRole = "Admin" | "Receptionist" | "Doctor";

const generateAuditFields = (creator: CreatorRole): Key[] => [
  datetimeField("CreatedAt"),
  selectorField(`${creator}ID`, creator),
];

// ------------------------
// Final Export
// ------------------------

export const getFilterFields = (): {
  [K in EntityKey]: Key[];
} => ({
  Department: [
    stringField("Name"),
    phoneField("Phone"),
    ...generateAuditFields("Admin"),
  ],
  Admin: [...personFields, ...employeeFields, ...generateAuditFields("Admin")],
  Receptionist: [
    ...personFields,
    ...employeeFields,
    ...generateAuditFields("Admin"),
  ],
  Doctor: [
    ...personFields,
    ...employeeFields,
    stringField("Specialization"),
    ...generateAuditFields("Admin"),
  ],
  Patient: [...personFields, ...generateAuditFields("Receptionist")],
  TestType: [
    ["Department", "custom", DepartmentSelectCallBack],
    stringField("Name"),
    numberField("Cost"),
    selectorField("AdminID", "Admin"),
    ...generateAuditFields("Admin"),
  ],
  TestOrder: [
    selectorField("AppointmentID", "Appointment"),
    selectorField("TestTypeID", "TestType"),
    datetimeField("OrderAt"),
  ],
  TestAppointment: [
    selectorField("TestOrderID", "TestOrder"),
    selectorField("PatientID", "Patient"),
    datetimeField("ScheduledDate"),
    uniselectField("Status", ["Cancelled", "Accepted"]),
    stringField("Result"),
    datetimeField("ResultDate"),
    selectorField("ReceptionistID", "Receptionist"),
    ...generateAuditFields("Receptionist"),
  ],
  Insurance: [
    stringField("ProviderName"),
    numberField("Coverage"),
    booleanField("isActive", ["Active", "Inactive"]),
    dateField("ExpirationDate"),
    ...generateAuditFields("Receptionist"),
  ],
  Appointment: [
    selectorField("DoctorID", "Doctor"),
    selectorField("PatientID", "Patient"),
    datetimeField("Time"),
    stringField("Reason"),
    uniselectField("Status", ["Accepted", "Rejected"]),
    stringField("Notes"),
    selectorField("ReceptionistID", "Receptionist"),
    ...generateAuditFields("Receptionist"),
  ],
  Country: [],
  Prescription: [],
  Operation: [
    stringField("Name"),
    stringField("Description"),
    selectorField("PatientID", "Patient"),
    ["Department", "custom", DepartmentSelectCallBack],
    datetimeField("Scheduled Date"),
    ["Status", "uniselect", ["Done", "UnDone"]],
    ...generateAuditFields("Receptionist"),
  ],
  Payment: [],
});

export const filterFields = getFilterFields();
