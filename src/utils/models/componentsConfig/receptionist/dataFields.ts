import type { DataFields as DataFields } from "@/utils/models/types/utils/routeTypes";
import type { DisplayEntityKey } from "@/utils/models/types/utils/entityKeys.ts";
import {
  appointment,
  department,
  insurance,
  operation,
  patient,
  doctor,
  receptionist,
  testAppointment,
  testOrder,
  testType,
  prescription,
  person,
  employee,
  payment,
} from ".";
import { service } from "../admin/services/service";

export const dataFields: { [K in DisplayEntityKey]: DataFields<K> } = {
  Department: department["dataFields"],
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
  Service: service["dataFields"],
  Person: person["dataFields"],
  Employee: employee["dataFields"],
  Payment: payment["dataFields"],
};
