import type { FetchingEntityKey } from "../types/utils/entityKeys";

export const fetchingPaths: { [K in FetchingEntityKey]: string } = {
  Department: "/admin/departments/list",
  Admin: "/admin/human-resources/admins/list",
  Doctor: "/admin/human-resources/doctors/list",
  Patient: "/admin/human-resources/patients/list",
  Receptionist: "/admin/human-resources/receptionists/list",
  TestType: "/admin/tests/types",
  Appointment: "/admin/appointments",
  TestOrder: "/admin/tests/orders",
  TestAppointment: "/admin/tests/appointments",
  Insurance: "/admin/insurances",
  Operation: "/admin/operations",
  Prescription: "/admin/prescriptions",
  Payment: "/admin/payments",
  Country: "/countries",
};
