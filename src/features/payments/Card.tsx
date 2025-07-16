import { useOutletContext } from "react-router-dom";
import type { Payment } from "../../utils/models/types";
import Clickable from "@/ui/customComponents/Clickable";
import Data from "./Data";
import EntityCard from "@/ui/entityComponents/Card";

export default function Card() {
  const { payment } = useOutletContext<{
    payment: Payment;
  }>();

  const { IsPaid } = payment;

  return (
    <EntityCard
      title="Payment"
      canDelete={false}
      canEdit={false}
      headerWidth={160}
      Data={
        <>
          <Data payment={payment} />
          <span>Status:</span>
          <span>{IsPaid ? "Paid" : "Not Paid"}</span>
        </>
      }
    >
      {!IsPaid ? (
        <Clickable
          as="Link"
          to={`pay`}
          variant="primary"
          className="w-full text-4xl!"
        >
          Pay
        </Clickable>
      ) : null}
    </EntityCard>
  );
}
