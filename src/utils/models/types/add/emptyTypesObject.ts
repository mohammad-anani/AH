import type {
  EmptyAdmin,
  EmptyAppointment,
  EmptyDepartment,
  EmptyDoctor,
  EmptyEmployee,
  EmptyInsurance,
  EmptyOperation,
  EmptyPatient,
  EmptyPerson,
  EmptyPrescription,
  EmptyReceptionist,
  EmptyTestAppointment,
  EmptyTestOrder,
  EmptyTestType,
} from "./emptyObjectsTypes";

export type emptyObjectsTypes = {
  Department: EmptyDepartment;
  Patient: EmptyPatient;
  Employee: EmptyEmployee;
  Receptionist: EmptyReceptionist;
  Doctor: EmptyDoctor;
  Admin: EmptyAdmin;
  TestType: EmptyTestType;
  TestOrder: EmptyTestOrder;
  TestAppointment: EmptyTestAppointment;
  Insurance: EmptyInsurance;
  Operation: EmptyOperation;
  Person: EmptyPerson;
  Appointment: EmptyAppointment;
  Prescription: EmptyPrescription;
};
