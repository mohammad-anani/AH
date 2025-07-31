import formatDateIsoToLocal from "../../formatters/formatDateIsoToLocal";
import formatPhoneNumber from "../../formatters/formatPhoneNumber";
import { formatMoney } from "@/utils/formatters/formatMoney";
import { calculateAge } from "@/utils/formatters/calculateAge";
import { convert24To12 } from "@/utils/formatters/convert24To12";
import type { dataFields as DataFields, EntityKey } from "../types/util";
import type { typesObject } from "../types/typesObject";

// Person data fields
export const personDataFields: DataFields<"Person"> = (
  person: typesObject["Person"],
) => [
  [
    "Full Name",
    `${person.FirstName} ${person.MiddleName} ${person.LastName}`.trim(),
  ],
  ["Gender", person.Gender ? "Female" : "Male"],
  ["Age", calculateAge(person.DateOfBirth)],
  ["Country", person.Country.Name],
  ["Phone", formatPhoneNumber(person.Phone)],
  ["Email", person.Email],
  ["Username", person.Username],
];

// Employee data fields
export const employeeDataFields: DataFields<"Employee"> = (
  employee: typesObject["Employee"],
) => {
  const {
    Person,
    DepartmentID,
    Salary,
    HireDate,
    LeaveDate,
    WorkingDays,
    ShiftStart,
    ShiftEnd,
    isActive,
  } = employee;

  const formattedWorkingDays =
    WorkingDays.length === 7
      ? "Everyday"
      : WorkingDays.length === 0
        ? "None"
        : WorkingDays.join(", ");

  return [
    ...personDataFields(Person),
    [
      "Department",
      "View Department",
      `/admin/departments/${DepartmentID}`,
      "Department",
    ],
    ["Salary", formatMoney(Salary ?? 0)],
    ["Hire Date", formatDateIsoToLocal(HireDate)],
    ["Leave Date", LeaveDate ? formatDateIsoToLocal(LeaveDate) : "N/A"],
    ["Working Days", formattedWorkingDays],
    ["Shift Start", convert24To12(ShiftStart)],
    ["Shift End", convert24To12(ShiftEnd)],
    ["Status", isActive ? "Active" : "Inactive"],
  ];
};

// Export a big object for all entity dataFields
export const dataFields: {
  [K in EntityKey]: DataFields<K>;
} = {
  Department: ({ Name, Phone, CreatedByAdminID, CreatedAt }) => [
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

  Admin: ({ Employee, CreatedByAdminID, CreatedAt }) => [
    ...employeeDataFields(Employee),
    CreatedByAdminID
      ? [
          "Created By",
          "View Admin",
          `/admin/human-resources/admins/${CreatedByAdminID}`,
          "Admin",
        ]
      : ["Created By", "System"],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],

  Doctor: ({ Employee, Specialization, CreatedByAdminID, CreatedAt }) => [
    ...employeeDataFields(Employee),
    ["Specialization", Specialization],
    [
      "Created By",
      "View Admin",
      `/admin/human-resources/admins/${CreatedByAdminID}`,
      "Admin",
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],

  Patient: ({ Person, CreatedByReceptionistID, CreatedAt }) => [
    ...personDataFields(Person),
    [
      "Created By",
      "View Receptionist",
      `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
      "Receptionist",
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],

  Insurance: ({
    ProviderName,
    Coverage,
    isActive,
    CreatedAt,
    PatientID,
    CreatedByReceptionistID,
  }) => [
    [
      "Patient",
      "View Patient",
      "/admin/human-resources/patients/" + PatientID,
      "Patient",
    ],
    ["Provider", ProviderName],
    ["Coverage", Coverage * 100 + "%"],
    ["Status", isActive ? "Active" : "Inactive"],
    [
      "Created By",
      "View Receptionist",
      `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
      "Receptionist",
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],

  Receptionist: ({ Employee, CreatedByAdminID, CreatedAt }) => [
    ...employeeDataFields(Employee),
    CreatedByAdminID
      ? [
          "Created By",
          "View Admin",
          `/admin/human-resources/admins/${CreatedByAdminID}`,
          "Admin",
        ]
      : ["Created By", "System"],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],

  Appointment: ({
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

  TestType: ({ Name, DepartmentID, Cost, CreatedByAdminID, CreatedAt }) => [
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

  TestOrder: ({ TestTypeID, AppointmentID }) => [
    ["Test Type", "View Type", "/admin/tests/types/" + TestTypeID, "TestType"],
    [
      "Appointment",
      "View Appointment",
      "/admin/appointments/" + AppointmentID,
      "TestType",
    ],
  ],

  TestAppointment: ({
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
    ["Scheduled Date", formatDateIsoToLocal(ScheduledDate)],
    ["Status", Status],
    ["Result", Result],
    ["Result Date", ResultDate ? formatDateIsoToLocal(ResultDate) : "N/A"],
    [
      "Created By",
      "View Receptionist",
      `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
      "Receptionist",
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],
  Operation: (operation) => [
    ["Name", operation.Name],
    ["Description", operation.Description],

    [
      "Patient",
      "View Patient",
      `/admin/human-resources/patients/${operation.PatientID}`,
      "Patient",
    ],
    [
      "Department",
      "View Department",
      `/admin/departments/${operation.DepartmentID}`,
      "Department",
    ],
    ["Scheduled Date", formatDateIsoToLocal(operation.ScheduledDate)],
    ["Status", operation.Status],
    [
      "Payment",
      operation.PaymentID ? "View Payment" : "N/A",
      operation.PaymentID ? `/admin/payments/${operation.PaymentID}` : "",
    ],
    [
      "Created By",
      "View Receptionist",
      `/admin/human-resources/receptionists/${operation.CreatedByReceptionistID}`,
      "Receptionist",
    ],
    ["Created At", formatDateIsoToLocal(operation.CreatedAt)],
  ],
  Payment: ({ Amount, PatientPaid, InsurancePaid, IsPaid }) => {
    const left = Amount - InsurancePaid - PatientPaid;
    return [
      ["Amount", formatMoney(Amount)],
      ["Patient Paid", formatMoney(PatientPaid)],
      ["Insurance Paid", formatMoney(InsurancePaid)],
      ["Amount Left", formatMoney(left)],
      ["Is Paid", IsPaid ? "Paid" : "Not Paid"],
    ];
  },
};
