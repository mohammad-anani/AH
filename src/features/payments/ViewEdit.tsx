import { Outlet, useFetcher, useOutletContext } from "react-router-dom";
import type { Payment, TestAppointment } from "../../utils/models/types";
import { useEffect } from "react";

export default function ViewEdit() {
  const { appointment } = useOutletContext<{
    appointment: TestAppointment;
  }>();

  const fetcher = useFetcher();

  useEffect(() => {
    fetcher.load(`/admin/payments/${appointment.PaymentID}`);
  }, []);

  const payment: Payment = fetcher.data ?? [];

  return <Outlet context={{ payment }} />;
}
