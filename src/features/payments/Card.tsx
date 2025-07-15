import { useFetcher, useOutletContext } from "react-router-dom";
import type { Payment, TestAppointment } from "../../utils/models/types";
import Clickable from "@/ui/customComponents/Clickable";
import Data from "./Data";
import EntityCard from "@/ui/entityComponents/Card";
import { useEffect } from "react";

export default function Card() {
  const { appointment } = useOutletContext<{
    appointment: TestAppointment;
  }>();

  const fetcher = useFetcher();

  useEffect(() => {
    fetcher.load(`/admin/payments/${appointment.PaymentID}`);
  }, []);

  const payment: Payment = fetcher.data ?? [];

  return (
    <EntityCard
      title="Payment"
      canDelete={false}
      canEdit={false}
      Data={<Data payment={payment} />}
    >
      <Clickable
        as="Link"
        to={`pay`}
        variant="primary"
        className="w-full text-4xl!"
      >
        Pay
      </Clickable>
    </EntityCard>
  );
}
