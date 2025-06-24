import H2 from "@/ui/customComponents/H2";
import Clickable from "@/ui/customComponents/Clickable";
import type { OptionalChildrenProps } from "@/utils/models/types";
import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogClose,
} from "@/components/ui/dialog";
import { useFetcher } from "react-router-dom";

export default function Card({
  Data,
  title,
  canEdit = true,
  canDelete = true,
  backLink = "",
  headerWidth = 150,
  deleteMessage,
  children,
}: {
  Data: ReactNode;
  title: string;
  canEdit?: boolean;
  canDelete?: boolean;
  backLink?: string;
  headerWidth?: number;
  deleteMessage?: string;
  onDeleteFn?: () => void;
} & OptionalChildrenProps) {
  const fetcher = useFetcher();

  return (
    <Dialog>
      {backLink !== "" ? (
        <Clickable
          className="text-sm!"
          as="Link"
          variant="secondary"
          to={backLink}
        >
          Back
        </Clickable>
      ) : null}
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
        {Data}
      </div>
      <div className="mt-10 flex flex-wrap gap-x-3 gap-y-2 *:text-sm!">
        {children}
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
              {deleteMessage ||
                `Are you sure you want to delete this ${title.toLowerCase()}?`}
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
