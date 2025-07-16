import { useOutletContext } from "react-router-dom";
import type { Admin } from "../../../utils/models/types";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import Form from "./Form";
import { AdminSchema } from "@/utils/models/schema/schemas";

export default function Update() {
  const { admin } = useOutletContext<{ admin: Admin }>();

  return (
    <AddUpdateForm
      defaultValues={admin}
      schema={AdminSchema}
      title="Edit Admin"
    >
      <Form />
    </AddUpdateForm>
  );
}
