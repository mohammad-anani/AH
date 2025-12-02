import type {
  AddAdmin,
  AddAppointment,
  AddAppointmentFromPrevious,
  AddDepartment,
  AddDoctor,
  AddEmployee,
  AddInsurance,
  AddOperation,
  AddPatient,
  AddPerson,
  AddPrescription,
  AddReceptionist,
  AddService,
  AddTestAppointment,
  AddTestAppointmentFromTestOrder,
  AddTestOrder,
  AddTestType,
} from "./addTypes";

export type addTypesObject = {
  Person: AddPerson;
  Employee: AddEmployee;
  Admin: AddAdmin;
  Receptionist: AddReceptionist;
  Doctor: AddDoctor;
  Patient: AddPatient;
  Department: AddDepartment;
  TestType: AddTestType;
  Service: AddService;
  Appointment: AddAppointment;
  AppointmentFromPrevious: AddAppointmentFromPrevious;
  TestAppointment: AddTestAppointment;
  TestAppointmentFromTestOrder: AddTestAppointmentFromTestOrder;
  TestOrder: AddTestOrder;
  Operation: AddOperation;
  Prescription: AddPrescription;
  Insurance: AddInsurance;
};
