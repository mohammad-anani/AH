import type {
  AdminRow,
  AppointmentRow,
  DepartmentRow,
  DoctorRow,
  InsuranceRow,
  PatientRow,
  ReceptionistRow,
  TestAppointmentRow,
  TestOrderRow,
  TestTypeRow,
} from "./rowTypes";

export type rowTypesObject = {
  Department: DepartmentRow;
  Patient: PatientRow;
  Receptionist: ReceptionistRow;
  Doctor: DoctorRow;
  Admin: AdminRow;
  TestType: TestTypeRow;
  TestOrder: TestOrderRow;
  TestAppointment: TestAppointmentRow;
  Insurance: InsuranceRow;
  Operation: TestOrderRow;
  Prescription: TestOrderRow;
  Payment: TestOrderRow;
  Appointment: AppointmentRow;
};

//to change
