// subLinksConfig.ts

import type { SubLinks } from "../types/utils/routeTypes";
import type { EntityKey } from "../types/utils/entityKeys";

export const subLinks: {
  [K in EntityKey]: SubLinks<K>;
} = {
  Department: ({ ID }) => [
    ["Show Doctors", `/admin/human-resources/doctors?DepartmentID=${ID}`],
    [
      "Show Receptionists",
      `/admin/human-resources/receptionists?DepartmentID=${ID}`,
    ],
    ["Show Admins", `/admin/human-resources/admins?DepartmentID=${ID}`],
    ["Show Tests", `/admin/tests/types?DepartmentID=${ID}`],
    ["Show Operations", `/admin/operations?DepartmentID=${ID}`],
  ],

  Admin: ({ ID }) => [
    ["Show Departments", `/admin/departments?AdminID=${ID}`],
    [
      "Show Receptionists",
      `/admin/human-resources/receptionists?AdminID=${ID}`,
    ],
    ["Show Admins", `/admin/human-resources/admins?AdminID=${ID}`],
    ["Show Test Types", `/admin/tests/types?AdminID=${ID}`],
  ],

  Doctor: ({ ID }) => [
    ["Show Appointments", `/admin/appointments?DoctorID=${ID}`],
    ["Show Operations", `/admin/operations?DoctorID=${ID}`],
  ],

  Patient: ({ ID }) => [
    ["Show Appointments", `/admin/appointments?PatientID=${ID}`],
    ["Show Tests Appointments", `/admin/tests/appointments?PatientID=${ID}`],
    ["Show Operations", `/admin/operations?PatientID=${ID}`],
    ["Show Insurances", `/admin/insurances?PatientID=${ID}`],
  ],

  Insurance: () => [],

  Receptionist: ({ ID }) => [
    ["Show Appointments", `/admin/appointments?ReceptionistID=${ID}`],
    [
      "Show Tests Appointments",
      `/admin/tests/appointments?ReceptionistID=${ID}`,
    ],
    ["Show Patients", `/admin/human-resources/patients?ReceptionistID=${ID}`],
    ["Show Doctors", `/admin/human-resources/doctors?ReceptionistID=${ID}`],
    ["Show Operartions", `/admin/operations?ReceptionistID=${ID}`],
  ],

  Appointment: ({ ID }) => [
    ["Show Test Orders", `/admin/tests/orders?AppointmentID=${ID}`],
  ],

  TestType: ({ ID }) => [
    ["Show Test Appointments", `/admin/tests/appointments?TestTypeID=${ID}`],
    ["Show Test Orders", `/admin/tests/orders?TestTypeID=${ID}`],
  ],

  TestOrder: ({ ID }) => [
    ["Show Test Appointments", `/admin/tests/appointments?TestOrderID=${ID}`],
  ],

  TestAppointment: () => [],
  Payment: ({ IsPaid }) => (IsPaid ? [] : [["Make a Payment", "pay"]]),
};
