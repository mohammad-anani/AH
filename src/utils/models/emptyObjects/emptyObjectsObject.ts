import type { EntityKey } from "../types/util";
import {
  emptyDepartment,
  emptyPatient,
  emptyReceptionist,
  emptyDoctor,
  emptyAdmin,
  emptyTestType,
  emptyTestOrder,
  emptyTestAppointment,
  emptyInsurance,
  emptyOperation,
  emptyPrescription,
  emptyPayment,
} from "./emptyObjects";
import type { emptyObjectsTypes } from "./emptyObjectsTypesObject";

export const emptyObjects: Record<EntityKey, emptyObjectsTypes[EntityKey]> = {
  Department: emptyDepartment,
  Patient: emptyPatient,
  Receptionist: emptyReceptionist,
  Doctor: emptyDoctor,
  Admin: emptyAdmin,
  TestType: emptyTestType,
  TestOrder: emptyTestOrder,
  TestAppointment: emptyTestAppointment,
  Insurance: emptyInsurance,
  Operation: emptyOperation,
  Prescription: emptyPrescription,
  Payment: emptyPayment,
};
