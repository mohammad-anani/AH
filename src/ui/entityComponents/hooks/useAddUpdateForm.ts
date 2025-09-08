import { formatTitle } from "@/utils/formatters/formatTitle";
import throwError from "@/utils/helpers/throwError";

import { schemas as addSchemas } from "@/utils/models/zod/addSchemas/addSchemas";

import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, type DefaultValues } from "react-hook-form";
import {
  useSubmit,
  useNavigation,
  useOutletContext,
  useLocation,
  useLoaderData,
} from "react-router-dom";
import type z from "zod";
import { emptyObjects } from "@/utils/models/types/add/emptyObjects";
import { schemas as updateSchemas } from "@/utils/models/zod/updateSchemas/updateSchemas";
import { convertToUpdateObject } from "@/utils/helpers/flatten";

export default function useAddUpdateForm<T extends EntityKey>(
  entity: T,
  customSchema?: z.ZodTypeAny,
  customTitle?: string,
  customIsAdd?: boolean,
) {
  const loadbData = useLoaderData();

  const outletdata = useOutletContext<typesObject[EntityKey]>();

  const data = entity !== "Operation" ? outletdata : loadbData;

  console.log(data);

  const location = useLocation();

  const navData = location.state;

  const isAdd =
    customIsAdd !== undefined
      ? customIsAdd
      : location.pathname.includes("/add");

  const schema =
    customSchema || (isAdd ? addSchemas[entity] : updateSchemas[entity]);

  // Dummy data for Doctor entity
  const dummyDoctor = {
    FirstName: "John",
    MiddleName: "Michael",
    LastName: "Smith",
    Gender: "M",
    BirthDate: "1980-05-15",
    CountryID: 1,
    Phone: "12345678",
    Email: "john.smith@hospital.com",
    Password: "SecurePassword123",
    DepartmentID: 1,
    Salary: 5000,
    HireDate: "2020-01-15",
    WorkingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    ShiftStart: "08:00",
    ShiftEnd: "16:00",
    Specialization: "Cardiology",
    CostPerAppointment: 150,
  };

  const defaultValues = isAdd
    ? entity === "Doctor"
      ? { ...dummyDoctor, ...navData }
      : { ...emptyObjects[entity], ...navData }
    : convertToUpdateObject(data);

  console.log(defaultValues);

  const title =
    customTitle || `${isAdd ? "Add" : "Edit"} ${formatTitle(entity)}`;

  console.log(schema);

  //to check
  const methods = useForm({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(schema as any),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    defaultValues: defaultValues as DefaultValues<any>,
    criteriaMode: "all",
  });

  const {
    handleSubmit,
    formState: { isSubmitting: isSub, errors },
  } = methods;

  console.log(errors);
  const submit = useSubmit();
  const { state } = useNavigation();
  const isSubmitting = state === "submitting" || isSub;

  // removed console.log

  if (!schema || !defaultValues)
    throwError(500, "schema or default values didn't load.");

  return {
    title,
    methods,
    handleSubmit,
    submit,

    isAdd,
    isSubmitting,
  };
}
