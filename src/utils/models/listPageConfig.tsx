// List page configuration for entities
import type { rowTypesObject } from "@/utils/models/types/rowTypesObject";
import type { Primitive } from "zod";
import type { EntityKey, Key } from "@/utils/models/types/util";
import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import { personFields, employeeFields } from "@/utils/models/objectKeys";
import DepartmentSelect from "@/features/department/DepartmentSelect";

//add rest

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
      ["Admin", "selector", ["Admin", "FilterDepartments"]],
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
      ["Receptionist", "selector", ["Receptionist", "FilterDoctors"]],
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
    [
      ...personFields,
      ["CreatedAt", "datetime"],
      ["Receptionist", "selector", ["Receptionist", "FilterPatients"]],
    ],
  ],
  TestType: [
    [
      ["Name", "Department"],
      (item: rowTypesObject["TestType"]) => [item.Name, item.DepartmentName],
      [1, 1],
    ],
    [
      [
        "Department",
        "custom",
        [
          ({ field, onChange }) => (
            <DepartmentSelect
              departmentID={Number(field)}
              setDepartmentID={onChange}
            />
          ),
          "number",
        ],
      ],
      ["Name", "string"],
      ["Cost", "number"],
      ["Admin", "selector", ["Admin", "FilterTestTypes"]],
      ["CreatedAt", "datetime"],
    ],
  ],

  TestOrder: [
    [["ID"], (item: rowTypesObject["TestOrder"]) => [item.ID], [2]],
    [
      ["Appointment", "selector", ["Appointment", ""]],
      ["TestType", "selector", ["TestType", "FilterTestOrders"]],
      ["Doctor", "selector", ["Doctor", ""]],
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
      ["TestOrder", "selector", ["TestOrder", "FilterTestAppointments"]],
      ["Patient", "selector", ["Patient", "FilterTestAppointments"]],
      ["ScheduledDate", "datetime"],
      ["Status", "select", ["Cancelled", "Accepted"]],
      ["Result", "string"],
      ["ResultDate", "datetime"],
      ["Receptionist", "selector", ["Receptionist", "FilterTestAppointments"]],
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
      ["Doctor", "selector", ["Doctor", "FilterAppointments"]],
      ["Patient", "selector", ["Patient", "FilterAppointments"]],
      ["Time", "datetime"],
      ["Reason", "string"],
      ["Status", "select", ["Accepted", "Rejected"]],
      ["Notes", "string"],
      ["Receptionist", "selector", ["Receptionist", "FilterAppointments"]],
      ["CreatedAt", "datetime"],
    ],
  ],
};
