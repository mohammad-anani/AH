import type { EntityKey } from "../../types/utils/entityKeys";
import type { SubLinks } from "../../types/utils/routeTypes";
import { appointmentSubLinks } from "./appointment";
import { departmentSubLinks } from "./department";
import {
  adminSubLinks,
  doctorSubLinks,
  patientSubLinks,
  receptionistSubLinks,
} from "./human-resources";
import { insuranceSubLinks } from "./insurance";
import { operationSubLinks } from "./operation";
import { prescriptionSubLinks } from "./prescription";
import {
  testTypeSubLinks,
  testOrderSubLinks,
  testAppointmentSubLinks,
} from "./test";

export const subLinks: {
  [K in EntityKey]: SubLinks<K>;
} = {
  Department: departmentSubLinks,
  Admin: adminSubLinks,
  Doctor: doctorSubLinks,
  Patient: patientSubLinks,
  Insurance: insuranceSubLinks,
  Receptionist: receptionistSubLinks,
  Appointment: appointmentSubLinks,
  TestType: testTypeSubLinks,
  TestOrder: testOrderSubLinks,
  TestAppointment: testAppointmentSubLinks,
  Prescription: prescriptionSubLinks,
  Operation: operationSubLinks,
};
