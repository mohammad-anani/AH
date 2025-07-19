import AdminData from "@/features/human-resources/admin/Data";
import DoctorData from "@/features/human-resources/doctor/Data";
import PatientData from "@/features/human-resources/patient/Data";
import ReceptionistData from "@/features/human-resources/receptionist/Data";
import TestTypeData from "@/features/tests/type/Data";
import TestOrderData from "@/features/tests/order/Data";
import TestAppointmentData from "@/features/tests/appointment/Data";
import PaymentData from "@/features/payments/Data";
import DepartmentData from "@/features/department/Data";
import type { DataComponentPropsTypes, EntityKey } from "./types/util";

export const DataObject = {
  Department: DepartmentData,
  Admin: AdminData,
  Doctor: DoctorData,
  Patient: PatientData,
  Receptionist: ReceptionistData,
  TestType: TestTypeData,
  TestOrder: TestOrderData,
  TestAppointment: TestAppointmentData,
  Payment: PaymentData,
  Prescription: PaymentData,
  Operation: PaymentData,
  Insurance: PaymentData,
} satisfies {
  [K in EntityKey]: React.ComponentType<DataComponentPropsTypes[K]>;
};

//to be changed
