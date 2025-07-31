import {
  adminFields,
  appointmentFields,
  departmentFields,
  doctorFields,
  insuranceFields,
  operationFields,
  patientFields,
  prescription,
  receptionistFields,
  testAppointmentFields,
  testOrderFields,
  testTypeFields,
} from ".";
import type { EntityKey } from "../../types/utils/entityKeys";
import type { FilterKey } from "../../types/utils/Form&Filter";

export const filterFields: {
  [K in EntityKey]: FilterKey[];
} = {
  Department: departmentFields,
  Admin: adminFields,
  Receptionist: receptionistFields,
  Doctor: doctorFields,
  Patient: patientFields,
  TestType: testTypeFields,
  TestOrder: testOrderFields,
  TestAppointment: testAppointmentFields,
  Insurance: insuranceFields,
  Appointment: appointmentFields,
  Operation: operationFields,
  Prescription: prescription,
};
