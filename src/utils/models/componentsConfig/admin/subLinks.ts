import type { EntityKey } from "../../types/utils/entityKeys";
import type { SubLinks } from "../../types/utils/routeTypes";

import {
  admin,
  appointment,
  bill,
  department,
  doctor,
  insurance,
  operation,
  patient,
  prescription,
  receptionist,
  testAppointment,
  testOrder,
  testType,
} from "./entities";

export const subLinks: {
  [K in EntityKey]: SubLinks<K> | undefined;
} = {
  Admin: admin["subLinks"],
  Appointment: appointment["subLinks"],
  Bill: bill["subLinks"],
  Department: department["subLinks"],
  Doctor: doctor["subLinks"],
  Insurance: insurance["subLinks"],
  Operation: operation["subLinks"],
  Patient: patient["subLinks"],
  Prescription: prescription["subLinks"],
  Receptionist: receptionist["subLinks"],
  TestAppointment: testAppointment["subLinks"],
  TestOrder: testOrder["subLinks"],
  TestType: testType["subLinks"],
};
