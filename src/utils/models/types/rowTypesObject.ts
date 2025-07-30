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
import type { Country } from "./types";

export type rowTypesObject = {
  Department: DepartmentRow;
  Patient: PatientRow;
  Receptionist: ReceptionistRow;
  Doctor: DoctorRow;
  Admin: AdminRow;
  TestType: TestTypeRow;
  TestOrder: TestOrderRow;
  Country: Country;
  TestAppointment: TestAppointmentRow;
  Insurance: InsuranceRow;
  Operation: TestOrderRow;
  Prescription: TestOrderRow;
  Payment: TestOrderRow;
  Appointment: AppointmentRow;
};

//to change
