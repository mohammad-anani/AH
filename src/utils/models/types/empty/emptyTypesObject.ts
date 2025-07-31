import type {
  EmptyDepartment,
  EmptyPatient,
  EmptyEmployee,
  EmptyReceptionist,
  EmptyDoctor,
  EmptyAdmin,
  EmptyTestType,
  EmptyTestOrder,
  EmptyTestAppointment,
  EmptyInsurance,
  EmptyOperation,
  EmptyPerson,
  EmptyAppointment,
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
  Prescription: "1";
};
