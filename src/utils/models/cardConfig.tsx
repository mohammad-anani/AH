import type { EntityKey } from "./types/util";
import type { typesObject } from "./types/typesObject";
import type { Primitive } from "zod";
import { employeeDataFields, personDataFields } from "./dataFields";
import formatDateIsoToLocal from "../formatters/formatDateIsoToLocal";
import formatPhoneNumber from "../formatters/formatPhoneNumber";

export const cardConfig: {
  [K in EntityKey]: {
    subLinks: (item: typesObject[K]) => [text: string, link: string][];
    dataFields: (
      item: typesObject[K],
    ) => [label: string, value: Primitive, link?: string, entity?: EntityKey][];
  };
} = {
  Department: {
    subLinks: ({ ID }) => [
      ["Show Doctors", `/admin/human-resources/doctors?Department=${ID}`],
      [
        "Show Receptionists",
        `/admin/human-resources/receptionists?Department=${ID}`,
      ],
      ["Show Admins", `/admin/human-resources/admins?Department=${ID}`],
      ["Show Tests", `/admin/tests/types?Department=${ID}`],
      ["Show Operations", `/admin/operations?Department=${ID}`],
    ],
    dataFields: ({ Name, Phone, CreatedByAdminID, CreatedAt }) => [
      ["Name", Name],
      ["Phone", formatPhoneNumber(Phone)],
      [
        "Created By",
        "View Admin",
        `/admin/human-resources/admins/${CreatedByAdminID}`,
        "Admin",
      ],
      ["Created At", formatDateIsoToLocal(CreatedAt)],
    ],
  },
  Admin: {
    subLinks: ({ ID }) => [
      ["Show Departments", `/admins/departments?AdminID=${ID}`],
      ["Show Tests", `/admin/tests?AdminID=${ID}`],
      [
        "Show Receptionists",
        `/admin/human-resources/receptionists?AdminID=${ID}`,
      ],
      ["Show Admins", `/admin/human-resources/admins?AdminID=${ID}`],
      ["Show Tests", `/admin/tests/types?AdminID=${ID}`],
    ],
    dataFields: ({ Employee, CreatedByAdminID, CreatedAt }) => [
      ...employeeDataFields(Employee),
      CreatedByAdminID
        ? [
            "Created By",
            "View Admin",
            `/admin/human-resources/admins/${CreatedByAdminID}`,
            "Admin",
          ]
        : ["Created By", "System"],
      ["Created At", CreatedAt],
    ],
  },
  Doctor: {
    subLinks: ({ ID }) => [
      ["Show Appointments", `/admin/appointments?DoctorID=${ID}`],
      ["Show Operations", `/admin/operations?DoctorID=${ID}`],
    ],
    dataFields: ({
      Employee,
      Specialization,
      CreatedByReceptionistID,
      CreatedAt,
    }) => [
      ...employeeDataFields(Employee),
      ["Specialization", Specialization],
      [
        "Created By",
        "View Receptionist",
        `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
        "Receptionist",
      ],
      ["Created At", CreatedAt],
    ],
  },
  Patient: {
    subLinks: ({ ID }) => [
      ["Show Appointments", `/admin/appointments?PatientID=${ID}`],
      ["Show Tests Appointments", `/admin/tests/appointments?PatientID=${ID}`],
      ["Show Operations", `/admin/operations?PatientID=${ID}`],
      ["Show Insurances", `/admin/insurances?PatientID=${ID}`],
    ],
    dataFields: ({ Person, CreatedByReceptionistID, CreatedAt }) => [
      ...personDataFields(Person),
      [
        "Created By",
        "View Receptionist",
        `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
        "Receptionist",
      ],
      ["Created At", CreatedAt],
    ],
  },
  Receptionist: {
    subLinks: ({ ID }) => [
      ["Show Appointments", `/admin/appointments?ReceptionistID=${ID}`],
      [
        "Show Tests Appointments",
        `/admin/tests/appointments?ReceptionistID=${ID}`,
      ],
      ["Show Patients", `/admin/human-resources/patients?ReceptionistID=${ID}`],
      ["Show Doctors", `/admin/human-resources/doctors?ReceptionistID=${ID}`],
      ["Show Operartions", `/admin/operations?ReceptionistID=${ID}`],
    ],
    dataFields: ({ Employee, CreatedByAdminID, CreatedAt }) => [
      ...employeeDataFields(Employee),
      CreatedByAdminID
        ? [
            "Created By",
            "View Admin",
            `/admin/human-resources/admins/${CreatedByAdminID}`,
            "Admin",
          ]
        : ["Created By", "System"],
      ["Created At", CreatedAt],
    ],
  },
  Appointment: {
    subLinks: ({ ID }) => [
      ["Show Prescriptions", "prescriptions"],
      ["Show Test Orders", `/admin/tests/orders?AppointmentID=${ID}`],
    ],
    dataFields: ({
      PatientID,
      DoctorID,
      Time,
      Reason,
      Status,
      Notes,
      CreatedByReceptionistID,
      CreatedAt,
    }) => [
      [
        "Patient",
        "View Patient",
        `/admin/human-resources/patients/${PatientID}`,
        "Patient",
      ],
      [
        "Doctor",
        "View Doctor",
        `/admin/human-resources/doctors/${DoctorID}`,
        "Doctor",
      ],
      ["Time", Time],
      ["Reason", Reason],
      ["Status", Status],
      ["Notes", Notes],
      [
        "Receptionist",
        "View Receptionist",
        `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
        "Receptionist",
      ],
      ["Created At", CreatedAt],
    ],
  },
  TestType: {
    subLinks: ({ ID }) => [
      ["Show Test Appointments", `/admin/tests/appointments?TestTypeID=${ID}`],
      ["Show Test Orders", `/admin/tests/orders?TestTypeID=${ID}`],
    ],
    dataFields: ({ Name, DepartmentID, Cost, CreatedByAdminID, CreatedAt }) => [
      ["Name", Name],
      [
        "Department",
        "View Department",
        `/admin/departments/${DepartmentID}`,
        "Department",
      ],
      ["Cost", `${Cost} $`],
      [
        "Created By",
        "View Admin",
        `/admin/human-resources/admins/${CreatedByAdminID}`,
        "Admin",
      ],
      ["Created At", CreatedAt],
    ],
  },
  TestOrder: {
    subLinks: ({ ID }) => [
      ["Show Test Appointments", `/admin/tests/appointments?TestOrderID=${ID}`],
    ],
    dataFields: ({ ID }) => [["ID", ID]],
  },
  TestAppointment: {
    subLinks: () => [],
    dataFields: ({
      TestOrderID,
      PatientID,
      ScheduledDate,
      Status,
      Result,
      ResultDate,
      CreatedByReceptionistID,
      CreatedAt,
    }) => [
      TestOrderID
        ? [
            "Test Order",
            "View Test Order",
            `/admin/tests/orders/${TestOrderID}`,
            "TestOrder",
          ]
        : ["Test Order", "None"],
      [
        "Patient",
        "View Patient",
        `/admin/human-resources/patients/${PatientID}`,
        "Patient",
      ],
      ["Scheduled Date", ScheduledDate],
      ["Status", Status],
      ["Result", Result],
      ["Result Date", ResultDate || "N/A"],
      [
        "Created By",
        "View Receptionist",
        `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
        "Receptionist",
      ],
      ["Created At", CreatedAt],
    ],
  },
};
