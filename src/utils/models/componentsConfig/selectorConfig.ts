import type { SelectorConfig } from "../types/utils/selectorTypes";
import type { EntityKey } from "../types/utils/entityKeys";

export const selectorConfig: {
  [K in EntityKey]: SelectorConfig<K>;
} = {
  Admin: {
    selectedDisplay: ({ Name }) => Name,
    path: "/admin/human-resources/admins",
  },
  Department: {
    selectedDisplay: ({ Name }) => Name,
    path: "/admin/departments",
  },
  Doctor: {
    selectedDisplay: ({ Name }) => Name,
    path: "/admin/human-resources/doctors",
  },
  Patient: {
    selectedDisplay: ({ Name }) => Name,
    path: "/admin/human-resources/patients",
  },
  Receptionist: {
    selectedDisplay: ({ Name }) => Name,
    path: "/admin/human-resources/receptionists",
  },
  TestType: {
    selectedDisplay: ({ Name }) => Name,
    path: "/admin/tests/types",
  },
  Appointment: {
    selectedDisplay: ({ DoctorName, PatientName }) =>
      DoctorName + "," + PatientName,
    path: "/admin/appointments",
  },
  TestOrder: {
    selectedDisplay: ({ ID }) => String(ID),
    path: "/admin/tests/orders",
  },
  TestAppointment: {
    selectedDisplay: ({ TestName, PatientName }) =>
      TestName + "," + PatientName,
    path: "/admin/tests/appointments",
  },
  Payment: {
    selectedDisplay: ({ ID }) => String(ID),
    path: "/admin/payments",
  },
  Insurance: {
    selectedDisplay: ({ ID }) => String(ID),
    path: "/admin/insurances",
  },
  Prescription: {
    selectedDisplay: ({ ID }) => String(ID),
    path: "/admin/prescriptions",
  },
  Operation: {
    selectedDisplay: ({ ID }) => String(ID),
    path: "/admin/operations",
  },
};
