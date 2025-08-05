import H2 from "@/ui/customComponents/H2";
import Clickable from "@/ui/customComponents/Clickable";

import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTitle,
  DialogHeader,
  DialogClose,
} from "@/components/ui/dialog";

import { type DataFields } from "@/utils/models/types/utils/routeTypes";
import { type SubLinks } from "@/utils/models/types/utils/routeTypes";
import Data from "./Data";
import { formatTitle } from "@/utils/formatters/formatTitle";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import { useFetcher, useOutletContext } from "react-router-dom";

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
  const fetcher = useFetcher();

  const status = object.Status;

  return (
    <Dialog>
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
                as="button"
                onClick={() => {
                  fetcher.submit(null, {
                    method: "POST",
                    action: "start",
                  });
                }}
                variant="primary"
              >
                Start
              </Clickable>
              <Clickable
                as="button"
                variant="destructive"
                onClick={() => {
                  fetcher.submit(null, {
                    method: "POST",
                    action: "cancel",
                  });
                }}
              >
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
      <div
        className={`grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 *:text-xl! *:odd:font-bold`}
      >
        <Data<T> data={object} fields={dataFields} />
      </div>

      <div className="mt-10 flex flex-wrap gap-x-3 gap-y-2 *:text-sm">
        {subLinks?.(object).map(([text, link, state]) => (
          <Clickable as="Link" to={link} variant="secondary" state={state}>
            {text}
          </Clickable>
        ))}
      </div>

      <DialogPortal>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <H2 className="text-left text-red-600!">Start</H2>
            </DialogTitle>
          </DialogHeader>

          <div className="flex justify-end gap-x-2">
            <DialogClose>
              <Clickable as="button" variant="secondary">
                Cancel
              </Clickable>
            </DialogClose>
            <Clickable
              onClick={() => {
                fetcher.submit(null, {
                  method: "delete",
                  action: "./delete",
                });
              }}
              as="button"
              variant="destructive"
            >
              Delete
            </Clickable>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
