import type { EntityKey } from "../../types/utils/entityKeys";
import type { SelectorConfig } from "../../types/utils/selectorTypes";

import {
  admin,
  appointment,
  bill,
  department,
  doctor,
  insurance,
  operation,
  patient,
  payment,
  prescription,
  receptionist,
  testAppointment,
  testOrder,
  testType,
} from "./entities";

export const selectorConfig: {
  [K in EntityKey]: SelectorConfig<K> | undefined;
} = {
  Admin: admin["selectorConfig"],
  Appointment: appointment["selectorConfig"],
  Bill: bill["selectorConfig"],
  Department: department["selectorConfig"],
  Doctor: doctor["selectorConfig"],
  Insurance: insurance["selectorConfig"],
  Operation: operation["selectorConfig"],
  Patient: patient["selectorConfig"],
  Prescription: prescription["selectorConfig"],
  Receptionist: receptionist["selectorConfig"],
  TestAppointment: testAppointment["selectorConfig"],
  TestOrder: testOrder["selectorConfig"],
  TestType: testType["selectorConfig"],
  Payment: payment["selectorConfig"],
};
