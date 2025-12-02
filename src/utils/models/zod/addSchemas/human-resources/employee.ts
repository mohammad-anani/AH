import { dateInPast, positiveNumber, time } from "../../reusableSchemas";
import { WorkingDaysSchema } from "../../schemas/index.ts";
import { AddPersonSchema } from "./person.ts";

export const AddEmployeeSchema = AddPersonSchema.extend({
  DepartmentID: positiveNumber("Department ID", 1),

  Salary: positiveNumber("Salary", 100, 99999),

  HireDate: dateInPast("Hire date"),

  WorkingDays: WorkingDaysSchema,

  ShiftStart: time("Shift Start"),
  ShiftEnd: time("Shift End"),

})
