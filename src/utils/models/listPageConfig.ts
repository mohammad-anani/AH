// List page configuration for entities
import type { rowTypesObject } from "@/utils/models/types/rowTypesObject";
import type { Primitive } from "zod";
import type { EntityKey, Key } from "@/utils/models/types/util";
import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import { personFields, employeeFields } from "@/utils/models/objectKeys";

export const listPageConfig: {
  [K in EntityKey]: [
    [string[], (item: rowTypesObject[K]) => Primitive[], number[]],
    Key[],
  ];
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
      ["AdminID", "string"],
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
    [
      ["Name", "Specialization"],
      (item: rowTypesObject["Doctor"]) => [item.Name, item.Specialization],
      [2, 1],
    ],
    [
      ...personFields,
      ...employeeFields,
      ["Specialization", "string"],
      ["CreatedAt", "datetime"],
      ["ReceptionistID", "number"],
    ],
  ],
  Patient: [
    [
      ["Name", "Age", "Phone"],
      (item: rowTypesObject["Patient"]) => [
        item.Name,
        item.Age,
        formatPhoneNumber(item.Phone),
      ],
      [2, 1, 1],
    ],
    [...personFields, ["CreatedAt", "datetime"], ["ReceptionistID", "number"]],
  ],
  TestType: [
    [
      ["Name", "Department"],
      (item: rowTypesObject["TestType"]) => [item.Name, item.DepartmentName],
      [1, 1],
    ],
    [
      ["ID", "number"],
      ["DepartmentID", "number"],
      ["Name", "string"],
      ["Cost", "number"],
      ["AdminID", "number"],
      ["CreatedAt", "datetime"],
    ],
  ],
  TestOrder: [
    [["ID"], (item: rowTypesObject["TestOrder"]) => [item.ID], [2]],
    [
      ["ID", "number"],
      ["AppointmentID", "number"],
      ["TestTypeID", "number"],
      ["DoctorID", "number"],
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
      ["TestOrderID", "number"],
      ["PatientID", "number"],
      ["ScheduledDate", "datetime"],
      ["Status", "select", ["Cancelled", "Accepted"]],
      ["Result", "string"],
      ["ResultDate", "datetime"],
      ["ReceptionistID", "number"],
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
      ["DoctorID", "number"],
      ["PatientID", "number"],
      ["Time", "datetime"],
      ["Reason", "string"],
      ["Status", "select", ["Accepted", "Rejected"]],
      ["Notes", "string"],
      ["ReceptionistID", "number"],
      ["CreatedAt", "datetime"],
    ],
  ],
};
