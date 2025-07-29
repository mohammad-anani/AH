// List page configuration for entities
import type { rowTypesObject } from "@/utils/models/types/rowTypesObject";
import type { EntityKey, Key, RowTemplate } from "@/utils/models/types/util";
import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import { DepartmentSelectCallBack } from "@/features/department/departmentSelectCallback";
import { CountrySelectCallBack } from "@/features/Country/CountrySelectCallback";

//add rest

const personFields: Key[] = [
  ["FirstName", "string"],
  ["MiddleName", "string"],
  ["LastName", "string"],
  ["Gender", "boolean", ["Male", "Female", "All"]],
  ["Age", "number"],
  ["Phone", "phone"],
  ["Email", "email"],
  ["CountryName", "custom", CountrySelectCallBack],
  ["Username", "string"],
];

const employeeFields: Key[] = [
  ["Department", "custom", DepartmentSelectCallBack],
  ["Salary", "money"],
  ["HireDate", "date"],
  ["LeaveDate", "date"],
  ["isActive", "boolean", ["Active", "Not Active", "All"]],
  [
    "WorkingDays",
    "multiselect",
    [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  ],
  ["ShiftStart", "time"],
  ["ShiftEnd", "time"],
];

export const listPageConfig: {
  [K in EntityKey]: [RowTemplate<K>, Key[]];
} = {
  Department: [
    [
      ["Name", "Phone"],
      (item: rowTypesObject["Department"]) => [
        item.Name,
        formatPhoneNumber(item.Phone),
      ],
      [2, 1],
    ],
    [
      ["Name", "string"],
      ["Phone", "phone"],
      ["AdminID", "selector", "Admin"],
      ["CreatedAt", "datetime"],
    ],
  ],
  Admin: [
    [["Name"], (item: rowTypesObject["Admin"]) => [item.Name], [2]],
    [...personFields, ...employeeFields, ["CreatedAt", "datetime"]],
  ],
  Receptionist: [
    [["Name"], (item: rowTypesObject["Receptionist"]) => [item.Name], [2]],
    [...personFields, ...employeeFields, ["CreatedAt", "datetime"]],
  ],
  Doctor: [
    [["Name"], (item: rowTypesObject["Doctor"]) => [item.Name], [2]],
    [
      ...personFields,
      ...employeeFields,
      ["Specialization", "string"],
      ["CreatedAt", "datetime"],
      ["ReceptionistID", "selector", "Receptionist"],
    ],
  ],
  Patient: [
    [
      ["Name", "Age"],
      (item: rowTypesObject["Patient"]) => [item.Name, item.Age],
      [2, 1],
    ],
    [
      ...personFields,
      ["CreatedAt", "datetime"],
      ["ReceptionistID", "selector", "Receptionist"],
    ],
  ],
  TestType: [
    [
      ["Name", "Department"],
      (item: rowTypesObject["TestType"]) => [item.Name, item.DepartmentName],
      [1, 1],
    ],
    [
      ["Department", "custom", DepartmentSelectCallBack],
      ["Name", "string"],
      ["Cost", "number"],
      ["AdminID", "selector", "Admin"],
      ["CreatedAt", "datetime"],
    ],
  ],

  TestOrder: [
    [["ID"], (item: rowTypesObject["TestOrder"]) => [item.ID], [2]],
    [
      ["AppointmentID", "selector", "Appointment"],
      ["TestTypeID", "selector", "TestType"],
      ["OrderAt", "datetime"],
    ],
  ],
  TestAppointment: [
    [
      ["Patient", "Test", "Date"],
      (item: rowTypesObject["TestAppointment"]) => [
        item.PatientName,
        item.TestName,
        formatDateIsoToLocal(item.Date),
      ],
      [1, 1, 1],
    ],
    [
      ["TestOrderID", "selector", "TestOrder"],
      ["PatientID", "selector", "Patient"],
      ["ScheduledDate", "datetime"],
      ["Status", "uniselect", ["Cancelled", "Accepted"]],
      ["Result", "string"],
      ["ResultDate", "datetime"],
      ["ReceptionistID", "selector", "Receptionist"],
      ["CreatedAt", "datetime"],
    ],
  ],
  Appointment: [
    [
      ["Patient", "Doctor", "Time"],
      (item: rowTypesObject["Appointment"]) => [
        item.PatientName,
        item.DoctorName,
        formatDateIsoToLocal(item.Time),
      ],
      [1, 1, 1],
    ],
    [
      ["DoctorID", "selector", "Doctor"],
      ["PatientID", "selector", "Patient"],
      ["Time", "datetime"],
      ["Reason", "string"],
      ["Status", "uniselect", ["Accepted", "Rejected"]],
      ["Notes", "string"],
      ["ReceptionistID", "selector", "Receptionist"],
      ["CreatedAt", "datetime"],
    ],
  ],
};
