import {
  admin,
  patient,
  receptionist,
  doctor,
  person,
  employee,
} from "./entities/human-resources";
import { appointment } from "./entities/appointment";
import { department } from "./entities/department";
import { bill } from "./entities/bill";
import { insurance } from "./entities/insurance";
import { prescription } from "./entities/prescription";
import { operation } from "./entities/operation";

import { testAppointment, testOrder, testType } from "./entities/test";

import type { DisplayEntityKey } from "../../types/utils/entityKeys";
import type { FilterKey } from "../../types/utils/Form&Filter";

export const filterFields: {
  [K in DisplayEntityKey]: FilterKey[];
} = {
  Admin: admin["filterFields"],
  Appointment: appointment["filterFields"],
  Department: department["filterFields"],
  Doctor: doctor["filterFields"],
  Patient: patient["filterFields"],
  Person: person["filterFields"],
  Receptionist: receptionist["filterFields"],
  TestOrder: testOrder["filterFields"],
  TestType: testType["filterFields"],
  TestAppointment: testAppointment["filterFields"],
  Employee: employee["filterFields"],
  Prescription: prescription["filterFields"],
  Bill: bill["filterFields"],
  Operation: operation["filterFields"],
  Insurance: insurance["filterFields"],
};
