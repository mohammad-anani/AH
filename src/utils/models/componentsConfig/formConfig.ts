import { DepartmentSelectCallBack } from "@/features/department/departmentSelectCallback";
import { CountrySelectCallBack } from "@/features/Country/CountrySelectCallback";
import type { typesObject } from "../types/normal/typesObject";
import type {
  AllEntityKeys,
  DotAccess,
  FormKey,
  FilterKey,
} from "../types/utils/Form&Filter";
import type { SelectorConfig } from "../types/utils/selectorTypes";
import type { RowTemplate } from "./routeConfig";
import type { dataFields as DataFields } from "../types/utils/routeTypes";
import type { EntityKey } from "../types/utils/entityKeys";
import { selectorConfig } from "./selectorConfig";
import { dataFields } from "./dataFields";
import { filterFields } from "./filterFields";
import { rowTemplates } from "./rowTemplates";

// --- Constants ---
const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const genderLabels = ["Male", "Female", "None"];
const statusLabels = ["Active", "Inactive"];

// --- Base Groups ---
const personForm: FormKey<"Person">[] = [
  ["First Name", "FirstName", "string", "both"],
  ["Middle Name", "MiddleName", "string", "both"],
  ["Last Name", "LastName", "string", "both"],
  ["Birth Date", "DateOfBirth", "date", "both"],
  ["Gender", "Gender", "boolean", "both", genderLabels],
  ["Country", "Country.ID", "custom", "both", CountrySelectCallBack],
  ["Phone", "Phone", "phone", "both"],
  ["Email", "Email", "email", "both"],
  ["Username", "Username", "string", "both"],
];

const employeeForm: FormKey<"Employee">[] = [
  ...prefixFields<"Employee", "Person">("Person", personForm),
  ["Department", "DepartmentID", "custom", "both", DepartmentSelectCallBack],
  ["Salary", "Salary", "money", "both"],
  ["Hire Date", "HireDate", "date", "both"],
  ["Working Days", "WorkingDays", "multiselect", "both", weekdays],
  ["Shift Start", "ShiftStart", "time", "both"],
  ["Shift End", "ShiftEnd", "time", "both"],
  ["Status", "isActive", "boolean", "update", statusLabels],
];

const adminForm: FormKey<"Admin">[] = [
  ...prefixFields<"Admin", "Employee">("Employee", employeeForm),
];

const doctorForm: FormKey<"Doctor">[] = [
  ...prefixFields<"Doctor", "Employee">("Employee", employeeForm),
  ["Specialization", "Specialization", "string", "both"],
];

const receptionistForm: FormKey<"Receptionist">[] = [
  ...prefixFields<"Receptionist", "Employee">("Employee", employeeForm),
];

const patientForm: FormKey<"Patient">[] = [
  ...prefixFields<"Patient", "Person">("Person", personForm),
];

const departmentForm: FormKey<"Department">[] = [
  ["Name", "Name", "string", "both"],
  ["Phone", "Phone", "phone", "both"],
];

const testTypeForm: FormKey<"TestType">[] = [
  ["Name", "Name", "string", "both"],
  ["Department", "DepartmentID", "custom", "both", DepartmentSelectCallBack],
  ["Cost", "Cost", "money", "both"],
];

const insuranceForm: FormKey<"Insurance">[] = [
  [
    "Patient",
    "PatientID",
    "selector",
    "add",
    [
      "Patient",
      selectorConfig["Patient"] as SelectorConfig<EntityKey>,
      rowTemplates["Patient"] as RowTemplate<EntityKey>,
      dataFields["Patient"] as DataFields<EntityKey>,
      filterFields["Patient"] as FilterKey[],
    ],
  ],
  ["Provider Name", "ProviderName", "string", "both"],
  ["Coverage", "Coverage", "number", "both"],
  ["Expiration Date", "ExpirationDate", "date", "both"],
  ["Status", "isActive", "boolean", "update", statusLabels],
];

// --- Final Config ---
export const formConfig: {
  [K in EntityKey]: FormKey<K>[];
} = {
  Admin: adminForm,
  Doctor: doctorForm,
  Receptionist: receptionistForm,
  Patient: patientForm,
  Department: departmentForm,
  TestType: testTypeForm,
  Insurance: insuranceForm,
  // Add other entities here
};

// --- Utility ---
function prefixFields<T extends AllEntityKeys, B extends AllEntityKeys = T>(
  prefix: string,
  baseFields: FormKey<B>[],
): FormKey<T>[] {
  return baseFields.map(([label, fieldKey, type, mode, ...rest]) => [
    label,
    `${prefix}.${fieldKey}` as DotAccess<typesObject[T]>,
    type,
    mode,
    ...rest,
  ]);
}
