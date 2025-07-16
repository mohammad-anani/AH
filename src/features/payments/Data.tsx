import type { Payment } from "../../utils/models/types";

import { formatMoney } from "@/utils/formatters/formatMoney";

interface DataProps {
  payment: Payment;
}

export default function Data({ payment }: DataProps) {
  const { Amount, PatientPaid, InsurancePaid } = payment;

  const left = Amount - InsurancePaid - PatientPaid;

  return (
    <>
      <span>Amount:</span>
      <span>{Amount || Amount === 0 ? formatMoney(Amount) : null}</span>
      <span>Patient Paid:</span>
      <span>
        {PatientPaid || PatientPaid === 0 ? formatMoney(PatientPaid) : null}
      </span>
      <span>Insurance Paid:</span>
      <span>
        {InsurancePaid || InsurancePaid === 0
          ? formatMoney(InsurancePaid)
          : null}
      </span>
      <span>Amount Left:</span>
      <span>{isNaN(left) ? null : formatMoney(left)}</span>
    </>
  );
}
