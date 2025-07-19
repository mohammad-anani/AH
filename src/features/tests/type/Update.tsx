import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import { TestTypeSchema } from "@/utils/models/schema/schemas";
import type { TestType } from "@/utils/models/types";

import { useOutletContext } from "react-router-dom";
import Form from "./Form";
export default function Update() {
  const type = useOutletContext<TestType>();

  return (
    <AddUpdateForm
      schema={TestTypeSchema}
      title="Edit Test Type"
      defaultValues={type}
    >
      <Form />
    </AddUpdateForm>
  );
}
