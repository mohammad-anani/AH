import type {
  AdminRow,
  AppointmentRow,
  DepartmentRow,
  DoctorRow,
  InsuranceRow,
  OperationRow,
  PatientRow,
  PaymentRow,
  PrescriptionRow,
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
  Operation: OperationRow;
  Appointment: AppointmentRow;
  Prescription: PrescriptionRow;
  Payment: PaymentRow;
};

