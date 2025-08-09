import type {
  FormAdmin,
  FormAppointment,
  FormBill,
  FormDepartment,
  FormDoctor,
  FormInsurance,
  FormOperation,
  FormPatient,
  FormPayment,
  FormReceptionist,
  FormTestAppointment,
  FormTestOrder,
  FormTestType,
} from "./formTypes";

export type formTypesObject = {
  Department: FormDepartment;
  Patient: FormPatient;
  Receptionist: FormReceptionist;
  Doctor: FormDoctor;
  Admin: FormAdmin;
  TestType: FormTestType;
  TestOrder: FormTestOrder;
  TestAppointment: FormTestAppointment;
  Insurance: FormInsurance;
  Operation: FormOperation;
  Appointment: FormAppointment;
  Prescription: { ID: number }; // Note: No FormPrescription schema found, using placeholder
  Bill: FormBill;
  Payment: FormPayment;
};
