import { memo, useMemo } from "react";
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

import { type DataFields } from "@/utils/models/types/utils/routeTypes";
import { type SubLinks } from "@/utils/models/types/utils/routeTypes";
import { type EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import Data from "./Data";
import { formatTitle } from "@/utils/formatters/formatTitle";
import useCard from "./hooks/useCard";
import { useDecodedJwt } from "@/utils/hooks/useDecodedJwt";

type CardProps<T extends EntityKey> = {
  title: EntityKey;
  data?: typesObject[T];
  subLinks?: SubLinks<T>;
  dataFields: DataFields<T>;
  isModal?: boolean;
  isNestedCard?: boolean;
  canEdit?: boolean;
  canDelete?: boolean;
  headerWidth?: number;
  titleText?: string;

  dataFieldsObject?: {
    [K in EntityKey]: DataFields<K>;
  };
};

const Card = memo(function Card<T extends EntityKey>({
  title,
  canEdit = true,
  canDelete = true,
  data,
  isNestedCard = false,
  isModal = false,
  subLinks,
  dataFields,
  titleText,
  headerWidth,
  dataFieldsObject,
}: CardProps<T>) {
  const { subEntity, setSubCard, subDataFields, object, subObject, fetcher } =
    useCard<T>(dataFieldsObject, data);

  // Memoize the computed title text to avoid recalculation
  const displayTitle = useMemo(
    () => titleText ?? formatTitle(title),
    [titleText, title],
  );

  // Memoize the overflow check to avoid recalculation
  const shouldOverflow = useMemo(() => {
    if (!subObject || !subDataFields) return false;
    return subDataFields(subObject).length > 4;
  }, [subObject, subDataFields]);

  if (subObject && subDataFields) {
    return (
      <>
        <Clickable
          as="button"
          variant="secondary"
          onClick={() => setSubCard(undefined)}
        >
          Back to {title}
        </Clickable>
        <div
          className={`mt-[5px] max-h-[260px] ${shouldOverflow ? "overflow-y-scroll" : ""}`}
        >
          <Card
            title={subEntity}
            dataFields={subDataFields as DataFields<typeof subEntity>}
            canDelete={false}
            canEdit={false}
            isModal={true}
            isNestedCard={true}
            data={subObject}
          />
        </div>
      </>
    );
  }
  return (
    <Dialog>
      {!isModal ? (
        <Clickable className="text-sm!" as="Back" variant="secondary">
          Back
        </Clickable>
      ) : null}
      <div className="flex items-center justify-between">
        {!isModal ? <H2>{displayTitle}</H2> : null}
        <div className="flex gap-x-2">
          {canEdit ? (
            <Clickable as="Link" variant="primary" to="update">
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
        className={`grid ${headerWidth ? "grid-cols-[" + headerWidth + "px_1fr]" : "grid-cols-[auto_1fr]"} gap-x-2 gap-y-1 *:text-xl! *:odd:font-bold`}
      >
        <Data
          isNestedCard={isNestedCard}
          data={object}
          fields={dataFields as DataFields<EntityKey>}
          setSubCard={setSubCard}
          isModal={isModal}
        />
      </div>
      {!isModal ? (
        <div className="mt-10 flex flex-wrap gap-x-3 gap-y-2 *:text-sm">
          {subLinks?.(object).map(([text, link, state]) => (
            <Clickable as="Link" to={link} variant="secondary" state={state}>
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
                    action: "delete",
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
});

export default Card;
