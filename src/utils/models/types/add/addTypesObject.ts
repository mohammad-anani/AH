import type {
  AddPerson,
  AddEmployee,
  AddAdmin,
  AddReceptionist,
  AddDoctor,
  AddPatient,
  AddDepartment,
  AddTestType,
  AddService,
  AddAppointment,
  AddAppointmentFromPrevious,
  AddTestAppointment,
  AddTestAppointmentFromTestOrder,
  AddTestOrder,
  AddOperation,
  AddPrescription,
  AddInsurance,
  AddPayment,
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
  Payment: AddPayment;
  Bill: "none";
};
