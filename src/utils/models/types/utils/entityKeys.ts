export const entityKeys = [
  "Department",
  "Admin",
  "Doctor",
  "Patient",
  "Receptionist",
  "TestType",
  "Appointment",
  "TestOrder",
  "TestAppointment",
  "Insurance",
  "Operation",
  "Prescription",
  "Bill",
] as const;

export type EntityKey = (typeof entityKeys)[number];

export type DisplayEntityKey = EntityKey | "Person" | "Employee";

export type FetchingEntityKey = EntityKey | "Country";
