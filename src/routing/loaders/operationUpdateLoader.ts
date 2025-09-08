import findByID from "@/api/findByID";
import getList from "@/api/getList";
import { toKebabCase } from "@/utils/formatters/toKebab";
import throwError from "@/utils/helpers/throwError";
import type { Operation } from "@/utils/models/types/normal/types";
import { OperationDoctorRowSchema } from "@/utils/models/zod/rowSchemas";
import {
  OperationDoctorSchema,
  OperationSchema,
} from "@/utils/models/zod/schemas";
import { schemas } from "@/utils/models/zod/schemas/schemas";
import * as pluralize from "pluralize";
import type { LoaderFunctionArgs } from "react-router-dom";
import z from "zod";

const opdoctorSchema = z.array(OperationDoctorRowSchema);

export default async function operationUpdateLoader({
  params,
}: LoaderFunctionArgs) {
  const id = Number(params["id"]);

  if (!id || isNaN(id)) {
    throwError(400, "Invalid ID");
  }

  //to be changed
  const data = await findByID(`operations/${id}`);
  const schema = OperationSchema;
  if (!schema) {
    throwError(500, "Internal schema error");
  }

  const result = schema.safeParse(data);
  console.log(result);
  if (!result.success) {
    // Log validation errors for debugging in development
    if (import.meta.env.DEV) {
      console.error("API validation error:", result.error);
    }
    throwError(
      500,
      "Sorry, we received unexpected data from the server. Please try again later.",
    );
  }

  const doctorsApi = await getList(`operations/${id}/doctors`);

  console.log(doctorsApi);

  const doctors = (doctorsApi[0] as z.infer<typeof opdoctorSchema>).map(
    (d) => ({
      ID: d.DoctorID,
      Role: d.Role,
    }),
  );

  console.log(doctors);
  return { ...(data as Operation), OperationDoctors: doctors };
}
