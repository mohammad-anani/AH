import { useOutletContext } from "react-router-dom";
import type { Payment } from "../../utils/models/types";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import { PaySchema } from "@/utils/models/schemas";
import RegisteredInput from "@/ui/customComponents/RegisteredInput";
import Data from "./Data";

export default function Update() {
  const { payment } = useOutletContext<{ payment: Payment }>();

  return (
    <AddUpdateForm
      headerWidth={160}
      title="Pay"
      schema={PaySchema}
      defaultValues={payment}
    >
      <Data payment={payment} />
      <label htmlFor="toPay">Amount to Pay:</label>
      <RegisteredInput name="toPay">
        <input type="number" />
      </RegisteredInput>
    </AddUpdateForm>
  );
}
