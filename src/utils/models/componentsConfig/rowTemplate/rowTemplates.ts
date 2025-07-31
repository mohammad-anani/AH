import type { EntityKey } from "../../types/utils/entityKeys";
import type { RowTemplate } from "../routeConfig";
import { appointmentRowTemplate } from "./appointment";
import { departmentRowTemplate } from "./department";
import {
  adminRowTemplate,
  receptionistRowTemplate,
  doctorRowTemplate,
  patientRowTemplate,
} from "./human-resources";
import { insuranceRowTemplate } from "./insurance";
import { operationRowTemplate } from "./operation";
import { prescriptionRowTemplate } from "./prescription";
import {
  testTypeRowTemplate,
  testOrderRowTemplate,
  testAppointmentRowTemplate,
} from "./test";

export const rowTemplates: {
  [K in EntityKey]: RowTemplate<K>;
} = {
  Department: departmentRowTemplate,
  Admin: adminRowTemplate,
  Receptionist: receptionistRowTemplate,
  Doctor: doctorRowTemplate,
  Patient: patientRowTemplate,
  TestType: testTypeRowTemplate,
  TestOrder: testOrderRowTemplate,
  TestAppointment: testAppointmentRowTemplate,
  Insurance: insuranceRowTemplate,
  Appointment: appointmentRowTemplate,
  Operation: operationRowTemplate,
  Prescription: prescriptionRowTemplate,
};
