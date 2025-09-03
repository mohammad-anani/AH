import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  datetime,
} from "../../reusableSchemas";

export const FormOperationSchema = z.object({
  Name: nonEmptyString("Name").min(3).max(30, {
    message: "Name must be between 3 and 30 characters.",
  }),

  RoomNumber: positiveNumber("Room number", 1),

  StartTime: datetime("Start time"),

  EndTime: datetime("End time"),

  PatientID: positiveNumber("Patient ID", 1),
});
