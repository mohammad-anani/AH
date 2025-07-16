import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { TestAppointment } from "@/utils/models/types";
import Clickable from "@/ui/customComponents/Clickable";

interface DataProps {
  appointment: TestAppointment;
}

export default function Data({ appointment }: DataProps) {
  const {
    TestOrderID,
    PatientID,
    ScheduledDate,
    Status,
    Result,
    ResultDate,

    CreatedByReceptionistID,
    CreatedAt,
  } = appointment;

  return (
    <>
      <span>Test ID:</span>
      <Clickable
        as="Link"
        to={`/admin/tests/types/${TestOrderID}`}
        variant="link"
      >
        View Test Type
      </Clickable>

      <span>Test Order:</span>
      {TestOrderID ? (
        <>
          <span>
            <Clickable
              as="Link"
              to={`/admin/tests/orders/${TestOrderID}`}
              variant="link"
            >
              View Test Order
            </Clickable>
          </span>
        </>
      ) : (
        <span>None</span>
      )}
      <span>Patient:</span>
      <span>
        <Clickable
          as="Link"
          to={`/admin/human-resources/patients/${PatientID}`}
          state={{ reference: true }}
          variant="link"
        >
          View Patient
        </Clickable>
      </span>
      <span>Scheduled Date:</span>
      <span>{formatDateIsoToLocal(ScheduledDate)}</span>
      <span>Status:</span>
      <span>{Status}</span>
      <span>Result:</span>
      <span>{Result}</span>
      <span>Result Date:</span>
      <span>{ResultDate ? formatDateIsoToLocal(ResultDate) : "N/A"}</span>
      <span>Payment:</span>
      <span>
        <Clickable as="Link" to={`payment`} variant="link">
          View Payment
        </Clickable>
      </span>
      <span>Created By</span>
      <span>
        <Clickable
          as="Link"
          to={`/admin/human-resources/receptionists/${CreatedByReceptionistID}`}
          variant="link"
        >
          View Receptionist
        </Clickable>
      </span>
      <span>Created At:</span>
      <span>{formatDateIsoToLocal(CreatedAt)}</span>
    </>
  );
}
