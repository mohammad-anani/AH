import type { DataFields as DataFields } from "@/utils/models/types/utils/routeTypes";
import type { DisplayEntityKey } from "@/utils/models/types/utils/entityKeys.ts";
import {
  appointment,
  department,
  operation,
  patient,
  doctor,
  testAppointment,
  testOrder,
  testType,
  prescription,
  person,
  employee,
} from ".";
import type { RouteConfig } from "../routeConfig";

export const admin: RouteConfig<"Admin"> = {
  selectorDisplay: () => "",
  subLinks: () => [],
  filterFields: [],
  formConfig: [],
  dataFields: () => [],
  rowTemplate: [[], () => [], []],
};

const receptionist: RouteConfig<"Receptionist"> = {
  selectorDisplay: () => "",
  subLinks: () => [],
  filterFields: [],
  formConfig: [],
  dataFields: () => [],
  rowTemplate: [[], () => [], []],
};

const bill: RouteConfig<"Bill"> = {
  selectorDisplay: () => "",
  subLinks: () => [],
  filterFields: [],
  formConfig: [],
  dataFields: () => [],
  rowTemplate: [[], () => [], []],
};

const payment: RouteConfig<"Payment"> = {
  selectorDisplay: () => "",
  subLinks: () => [],
  filterFields: [],
  formConfig: [],
  dataFields: () => [],
  rowTemplate: [[], () => [], []],
};

const insurance: RouteConfig<"Insurance"> = {
  selectorDisplay: () => "",
  subLinks: () => [],
  filterFields: [],
  formConfig: [],
  dataFields: () => [],
  rowTemplate: [[], () => [], []],
};

export const dataFields: { [K in DisplayEntityKey]: DataFields<K> } = {
  Department: department["dataFields"],
  Admin: admin["dataFields"],
  Doctor: doctor["dataFields"],
  Patient: patient["dataFields"],
  Insurance: insurance["dataFields"],
  Receptionist: receptionist["dataFields"],
  Appointment: appointment["dataFields"],
  TestType: testType["dataFields"],
  TestOrder: testOrder["dataFields"],
  TestAppointment: testAppointment["dataFields"],
  Operation: operation["dataFields"],
  Prescription: prescription["dataFields"],
  Bill: bill["dataFields"],
  Person: person["dataFields"],
  Employee: employee["dataFields"],
  Payment: payment["dataFields"],
};
