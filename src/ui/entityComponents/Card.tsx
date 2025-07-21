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
  subLinks,
  dataFields,

  headerWidth = 150,
}: {
  title: EntityKey;
  subLinks: (item: typesObject[T]) => [text: string, link: string][];
  dataFields: (
    item: typesObject[T],
  ) => [label: string, value: Primitive, link?: string][];
  canEdit?: boolean;
  canDelete?: boolean;
  headerWidth?: number;
}) {
  const data = useOutletContext<typesObject[T]>();

  const fetcher = useFetcher();

  return (
    <Dialog>
      <Clickable className="text-sm!" as="Back" variant="secondary">
        Back
      </Clickable>

      <div className="flex items-center justify-between">
        <H2>{title}</H2>
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
        <Data<T> data={data} fields={dataFields} />
      </div>
      <div className="mt-10 flex flex-wrap gap-x-3 gap-y-2 *:text-sm">
        {subLinks(data).map(([text, link]) => (
          <Clickable as="Link" to={link} variant="secondary">
            {text}
          </Clickable>
        ))}
      </div>
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
