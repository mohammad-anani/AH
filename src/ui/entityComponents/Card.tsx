import H2 from "@/ui/customComponents/H2";
import Clickable from "@/ui/customComponents/Clickable";

import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogClose,
} from "@/components/ui/dialog";
import { useFetcher, useOutletContext } from "react-router-dom";
import { type EntityKey } from "@/utils/models/types/util";
import type { typesObject } from "@/utils/models/types/typesObject";
import type { Primitive } from "zod";
import Data from "./Data";

export default function Card<T extends EntityKey>({
  title,
  canEdit = true,
  canDelete = true,
  data,
  subLinks,
  withBack = true,
  dataFields,

  headerWidth = 150,
}: {
  title: EntityKey;
  data?: typesObject[T];
  subLinks?: (item: typesObject[T]) => [text: string, link: string][];
  dataFields: (
    item: typesObject[T],
  ) => [label: string, value: Primitive, link?: string][];
  canEdit?: boolean;
  canDelete?: boolean;
  headerWidth?: number;
  withBack: boolean;
}) {
  const loaderData = useOutletContext<typesObject[T]>();

  const object = data ?? loaderData;

  const fetcher = useFetcher();

  return (
    <Dialog>
      {withBack ? (
        <Clickable className="text-sm!" as="Back" variant="secondary">
          Back
        </Clickable>
      ) : null}
      <div className="flex items-center justify-between">
        {withBack ? <H2>{title}</H2> : null}
        <div className="flex gap-x-2">
          {canEdit ? (
            <Clickable as="Link" variant="primary" to="edit">
              Edit
            </Clickable>
          ) : null}
          {canDelete ? (
            <DialogTrigger>
              <Clickable as="button" variant="destructive" to="">
                Delete
              </Clickable>
            </DialogTrigger>
          ) : null}
        </div>
      </div>
      <div
        className={`grid grid-cols-[${headerWidth}px_1fr] gap-y-1 *:text-xl! *:odd:font-bold`}
      >
        <Data<T> data={object} fields={dataFields} />
      </div>
      {subLinks ? (
        <div className="mt-10 flex flex-wrap gap-x-3 gap-y-2 *:text-sm">
          {subLinks(object).map(([text, link]) => (
            <Clickable as="Link" to={link} variant="secondary">
              {text}
            </Clickable>
          ))}
        </div>
      ) : null}
      {canDelete && (
        <DialogPortal>
          <DialogContent className="">
            <DialogHeader>
              <DialogTitle>
                <H2 className="text-left text-red-600!">Delete {title}</H2>
              </DialogTitle>
            </DialogHeader>
            <span>
              {`Are you sure you want to delete this ${title.toLowerCase()}?`}
            </span>
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
      )}
    </Dialog>
  );
}
