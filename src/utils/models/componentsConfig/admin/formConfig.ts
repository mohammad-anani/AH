import type { FormKey } from "../../types/utils/Form&Filter";
import type { DisplayEntityKey } from "../../types/utils/entityKeys";

import {
  admin,
  appointment,
  bill,
  department,
  doctor,
  employee,
  insurance,
  operation,
  patient,
  payment,
  person,
  prescription,
  receptionist,
  testAppointment,
  testOrder,
  testType,
} from "./entities";

export const formConfig: {
  [K in DisplayEntityKey]: FormKey<K>[];
} = {
  Admin: admin["formConfig"],
  Appointment: appointment["formConfig"],
  Bill: bill["formConfig"],
  Department: department["formConfig"],
  Doctor: doctor["formConfig"],
  Insurance: insurance["formConfig"],
  Operation: operation["formConfig"],
  Patient: patient["formConfig"],
  Prescription: prescription["formConfig"],
  Receptionist: receptionist["formConfig"],
  TestAppointment: testAppointment["formConfig"],
  TestOrder: testOrder["formConfig"],
  TestType: testType["formConfig"],
  Person: person["formConfig"],
  Employee: employee["formConfig"],
  Payment: payment["formConfig"],
};
