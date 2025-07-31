import type { EntityKey } from "../../types/utils/entityKeys";
import type { SelectorConfig } from "../../types/utils/selectorTypes";
import { appointmentSelectorConfig } from "./appointment";
import { departmentSelectorConfig } from "./department";
import {
  adminSelectorConfig,
  doctorSelectorConfig,
  patientSelectorConfig,
  receptionistSelectorConfig,
} from "./human-resources";
import { insuranceSelectorConfig } from "./insurance";
import { operationSelectorConfig } from "./operation";
import { prescriptionSelectorConfig } from "./prescription";
import {
  testTypeSelectorConfig,
  testOrderSelectorConfig,
  testAppointmentSelectorConfig,
} from "./test";

export const selectorConfig: {
  [K in EntityKey]: SelectorConfig<K>;
} = {
  Admin: adminSelectorConfig,
  Department: departmentSelectorConfig,
  Doctor: doctorSelectorConfig,
  Patient: patientSelectorConfig,
  Receptionist: receptionistSelectorConfig,
  TestType: testTypeSelectorConfig,
  Appointment: appointmentSelectorConfig,
  TestOrder: testOrderSelectorConfig,
  TestAppointment: testAppointmentSelectorConfig,
  Insurance: insuranceSelectorConfig,
  Prescription: prescriptionSelectorConfig,
  Operation: operationSelectorConfig,
};
