import type { DataFields as DataFields } from "@/utils/models/types/utils/routeTypes";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import {
  admin,
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
  prescriptionDataFields,
} from "./index.ts";

export const dataFields: { [K in EntityKey]: DataFields<K> } = {
  Department: department,
  Admin: admin,
  Doctor: doctor,
  Patient: patient,
  Insurance: insurance,
  Receptionist: receptionist,
  Appointment: appointment,
  TestType: testType,
  TestOrder: testOrder,
  TestAppointment: testAppointment,
  Operation: operation,
  Prescription: prescriptionDataFields,
};
