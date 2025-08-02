import type { EntityKey } from "../../types/utils/entityKeys";
import type { RowTemplate } from "../routeConfig";

import {
  admin,
  patient,
  receptionist,
  doctor,
} from "./entities/human-resources";
import { appointment } from "./entities/appointment";
import { department } from "./entities/department";
import { bill } from "./entities/bill";
import { insurance } from "./entities/insurance";
import { prescription } from "./entities/prescription";
import { operation } from "./entities/operation";

import { testAppointment, testOrder, testType } from "./entities/test";

export const rowTemplates: {
  [K in EntityKey]: RowTemplate<K> | undefined;
} = {
  Admin: admin["rowTemplate"],
  Appointment: appointment["rowTemplate"],
  Bill: bill["rowTemplate"],
  Department: department["rowTemplate"],
  Doctor: doctor["rowTemplate"],
  Insurance: insurance["rowTemplate"],
  Operation: operation["rowTemplate"],
  Patient: patient["rowTemplate"],
  Prescription: prescription["rowTemplate"],
  Receptionist: receptionist["rowTemplate"],
  TestAppointment: testAppointment["rowTemplate"],
  TestOrder: testOrder["rowTemplate"],
  TestType: testType["rowTemplate"],
};
