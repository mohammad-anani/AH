import type { FormKey } from "../../types/utils/Form&Filter";
import type { EntityKey } from "../../types/utils/entityKeys";
import { appointmentForm } from "./appointment";
import { departmentForm } from "./department";
import {
  adminForm,
  receptionistForm,
  patientForm,
  doctorForm,
} from "./human-resources";
import { insuranceForm } from "./insurance";
import { operationForm } from "./operation";
import { prescriptionForm } from "./prescription";
import { testAppointmentForm, testTypeForm } from "./test";
import { testOrderForm } from "./test/order";

export const formConfig: {
  [K in EntityKey]: FormKey<K>[];
} = {
  Admin: adminForm,
  Doctor: doctorForm,
  Receptionist: receptionistForm,
  Patient: patientForm,
  Department: departmentForm,
  TestType: testTypeForm,
  Insurance: insuranceForm,
  Prescription: prescriptionForm,
  TestAppointment: testAppointmentForm,
  TestOrder: testOrderForm,
  Appointment: appointmentForm,
  Operation: operationForm,
};
