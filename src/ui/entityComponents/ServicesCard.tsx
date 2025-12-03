import Clickable from "@/ui/customComponents/Clickable";
import H2 from "@/ui/customComponents/H2";

import { formatTitle } from "@/utils/formatters/formatTitle";
import { useFetcher, useLocation, useOutletContext } from "react-router-dom";

import { payment } from "@/utils/models/componentsConfig/receptionist";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type {
  DataFields,
  SubLinks,
} from "@/utils/models/types/utils/routeTypes";
import { useEffect } from "react";
import Data from "./Data";
import ListPage from "./ListPage";

export type ServicesEntities = "TestAppointment" | "Appointment" | "Operation";

type CardProps<T extends ServicesEntities> = {
  title: T;
  subLinks?: SubLinks<T>;
  dataFields: DataFields<T>;
  canStart?: boolean;
  canCancel?: boolean;
  canComplete?: boolean;
  canEdit?: boolean;
  canReschedule?: boolean;
  canPay?: boolean;
  showPaymentTable?: boolean;
};

export default function ServiceCard<T extends ServicesEntities>({
  title,
  subLinks,
  dataFields,
  canStart = true,
  canCancel = true,
  canComplete = true,
  canEdit = true,
  canReschedule = false,
  canPay = true,
  showPaymentTable = true,
}: CardProps<T>) {
  const fetcher = useFetcher();
  const object = useOutletContext<typesObject[T]>();
  const status = object.Service.Status;
  const { Bill } = object.Service;

  const url = useLocation().pathname;
  const totalPaid =
    fetcher.data?.[0]?.reduce(
      (sum: number, payment: { Amount: number }) => sum + (payment.Amount || 0),
      0,
    ) || 0;
  const remainingBalance = Bill.Amount - totalPaid;
  const needsPayment = remainingBalance > 0;

  useEffect(() => {
    if (showPaymentTable) {
      fetcher.load("payments");
    }
  }, [object, showPaymentTable]);

  if (!object || (showPaymentTable && !fetcher.data)) return;

  return (
    <>
      <Clickable className="text-sm!" as="Back" variant="secondary">
        Back
      </Clickable>

      <div className="flex items-start justify-between">
        <H2>{formatTitle(title)}</H2>
        <div className="flex flex-wrap justify-end space-y-1 gap-x-2">
          {canEdit && (
            <Clickable as="Link" variant="primary" to="update">
              Edit
            </Clickable>
          )}
          {needsPayment && canPay && (
            <Clickable
              as="Link"
              variant="primary"
              to="pay"
              className="bg-green-600! text-white! hover:bg-green-500! hover:text-white!"
            >
              Pay
            </Clickable>
          )}
          {["Scheduled", "Cancelled"].includes(status) && canReschedule && (
            <Clickable as="Link" to="reschedule" variant="primary">
              Reschedule
            </Clickable>
          )}
          {status === "Scheduled" ? (
            <>
              {canStart && (
                <Clickable
                  className="bg-amber-400! text-black! hover:bg-amber-300! hover:text-black!"
                  as="Link"
                  to="start"
                  variant="primary"
                >
                  Start
                </Clickable>
              )}
              {canCancel && (
                <Clickable as="Link" to="cancel" variant="destructive">
                  Cancel
                </Clickable>
              )}
            </>
          ) : status === "In Progress" ? (
            canComplete && (
              <Clickable as="Link" to="complete" variant="primary">
                Complete
              </Clickable>
            )
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 *:text-xl! *:odd:font-bold">
        <Data data={object} fields={dataFields} />
      </div>

      <div className="mt-10 flex flex-wrap gap-x-3 gap-y-2 *:text-sm">
        {subLinks?.(object).map(([text, link, state]) => (
          <Clickable
            key={link}
            as="Link"
            to={link}
            variant="secondary"
            state={state}
          >
            {text}
          </Clickable>
        ))}
      </div>
      {showPaymentTable ? (
        <ListPage
          entity="Payment"
          canAdd={false}
          withBack={false}
          data={fetcher.data}
          rowTemplate={payment["rowTemplate"]}
          detailsLink={(ID) =>
            url.split("/").splice(0, 2).join("/") + "/payments/" + ID
          }
        />
      ) : null}
    </>
  );
}
