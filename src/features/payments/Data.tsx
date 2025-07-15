import type { Payment } from "../../utils/models/types";

import { formatMoney } from "@/utils/formatters/formatMoney";

interface DataProps {
  payment: Payment;
}

export default function Data({ payment }: DataProps) {
  const { Amount, PatientPaid, InsurancePaid, IsPaid } = payment;

  return (
    <>
      <span>Amount:</span>
      <span>{Amount ? formatMoney(Amount) : null}</span>
      <span>Patient Paid:</span>
      <span>{PatientPaid ? formatMoney(PatientPaid) : null}</span>
      <span>Insurance Paid:</span>
      <span>{InsurancePaid ? formatMoney(InsurancePaid) : null}</span>
      <span>Status:</span>
      <span>{IsPaid ? "Paid" : "Not Paid"}</span>
    </>
  );
}
