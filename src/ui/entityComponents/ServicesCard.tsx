import H2 from "@/ui/customComponents/H2";
import Clickable from "@/ui/customComponents/Clickable";

import { formatTitle } from "@/utils/formatters/formatTitle";
import { useOutletContext } from "react-router-dom";

import Data from "./Data";
import type {
  DataFields,
  SubLinks,
} from "@/utils/models/types/utils/routeTypes";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

export type ServicesEntities = "TestAppointment" | "Appointment" | "Operation";

type CardProps<T extends ServicesEntities> = {
  title: T;
  subLinks?: SubLinks<T>;
  dataFields: DataFields<T>;
};

export default function ServiceCard<T extends ServicesEntities>({
  title,
  subLinks,
  dataFields,
}: CardProps<T>) {
  const object = useOutletContext<typesObject[T]>();
  const status = object.Status;

  return (
    <>
      <Clickable className="text-sm!" as="Back" variant="secondary">
        Back
      </Clickable>

      <div className="flex items-center justify-between">
        <H2>{formatTitle(title)}</H2>
        <div className="flex gap-x-2">
          <Clickable as="Link" variant="primary" to="edit">
            Edit
          </Clickable>

          {status === "Scheduled" ? (
            <>
              <Clickable
                className="bg-amber-400! text-black! hover:bg-amber-300! hover:text-black!"
                as="Link"
                to="start"
                variant="primary"
              >
                Start
              </Clickable>

              <Clickable as="Link" to="cancel" variant="destructive">
                Cancel
              </Clickable>
            </>
          ) : status === "In Progress" ? (
            <Clickable as="Link" to="complete" variant="primary">
              Complete
            </Clickable>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 *:text-xl! *:odd:font-bold">
        <Data<T> data={object} fields={dataFields} />
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
    </>
  );
}
