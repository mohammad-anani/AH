import H2 from "@/ui/customComponents/H2";
import Clickable from "@/ui/customComponents/Clickable";
import { formatTitle } from "@/utils/formatters/formatTitle";
import { useFetcher, useOutletContext } from "react-router-dom";
import Data from "./Data";
import type {
  DataFields,
  SubLinks,
} from "@/utils/models/types/utils/routeTypes";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDecodedJwt } from "@/utils/hooks/useDecodedJwt";

export type EmployeeEntities = "Receptionist" | "Doctor" | "Admin";

type CardProps<T extends EmployeeEntities> = {
  title: T;
  subLinks?: SubLinks<T>;
  dataFields: DataFields<T>;
  canLeave?: boolean;
  canEdit?: boolean;
  canDelete?: boolean;
};

export default function EmployeeCard<T extends EmployeeEntities>({
  title,
  subLinks,
  dataFields,
  canLeave = true,
  canEdit = true,
  canDelete = true,
}: CardProps<T>) {
  const object = useOutletContext<typesObject[T]>();
  const fetcher = useFetcher();
  const hasLeft = !!object.Employee.LeaveDate;

  const { decoded } = useDecodedJwt();

  const isNotSameUser =
    object?.ID !== +(decoded?.sub ?? -1) || decoded?.role !== "Admin";

  canDelete = canDelete && isNotSameUser;

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

          {/* Leave Dialog */}
          {canLeave && !hasLeft && isNotSameUser && (
            <Dialog>
              <DialogTrigger asChild>
                <Clickable
                  as="button"
                  className="bg-amber-400! text-black! hover:bg-amber-300! hover:text-black!"
                  variant="primary"
                >
                  Leave
                </Clickable>
              </DialogTrigger>
              <DialogPortal>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <H2 className="text-left text-amber-500!">
                        Leave {title}
                      </H2>
                    </DialogTitle>
                  </DialogHeader>
                  <span>
                    {`Are you sure you want to mark this ${title.toLowerCase()} as left?`}
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
                          method: "patch",
                          action: "./leave",
                        });
                      }}
                      as="button"
                      variant="primary"
                    >
                      Confirm Leave
                    </Clickable>
                  </div>
                </DialogContent>
              </DialogPortal>
            </Dialog>
          )}

          {/* Delete Dialog */}
          {canDelete && (
            <Dialog>
              <DialogTrigger asChild>
                <Clickable as="button" variant="destructive">
                  Delete
                </Clickable>
              </DialogTrigger>
              <DialogPortal>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <H2 className="text-left text-red-600!">
                        Delete {title}
                      </H2>
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
                          method: "POST",
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
          )}
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
    </>
  );
}
