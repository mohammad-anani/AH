import DepartmentForm from "@/features/department/Form";
import AdminForm from "@/features/human-resources/admin/Form";
import DoctorForm from "@/features/human-resources/doctor/Form";
import PatientForm from "@/features/human-resources/patient/Form";
import ReceptionistForm from "@/features/human-resources/receptionist/Form";
import TestAppointmentForm from "@/features/tests/appointment/Form";
import TestOrderForm from "@/features/tests/order/Form";
import TestTypeForm from "@/features/tests/type/Form";
import type { EntityKey } from "./types/util";
import Form from "@/features/appointment/Form";

export const Forms: Record<EntityKey, React.ComponentType> = {
  Department: DepartmentForm,
  Admin: AdminForm,
  Doctor: DoctorForm,
  Patient: PatientForm,
  Receptionist: ReceptionistForm,
  TestType: TestTypeForm,
  TestOrder: TestOrderForm,
  TestAppointment: TestAppointmentForm,
  Insurance: TestAppointmentForm,
  Operation: TestAppointmentForm,
  Prescription: TestAppointmentForm,
  Payment: TestAppointmentForm,
  Appointment: Form,
};

//to be changed
