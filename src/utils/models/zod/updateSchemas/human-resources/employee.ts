
import { dateInPast, positiveNumber, time } from "../../reusableSchemas";
import { WorkingDaysSchema } from "../../schemas";
import { UpdatePersonSchema } from "./person";

export const UpdateEmployeeSchema = UpdatePersonSchema.extend({
  DepartmentID: positiveNumber("Department ID", 1)
  ,

  Salary: positiveNumber("Salary", 100, 99999)
  ,

  HireDate: dateInPast("Hire Date"),

  WorkingDays: WorkingDaysSchema,
  ShiftStart: time("Shift Start"),

  ShiftEnd: time("Shift End"),
});
