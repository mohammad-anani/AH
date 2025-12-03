import Clickable from "@/ui/customComponents/Clickable";
import H2 from "@/ui/customComponents/H2";
import { memo, useMemo } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { formatTitle } from "@/utils/formatters/formatTitle";
import { useWindowWidth } from "@/utils/hooks/useWindowWidth";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import { type EntityKey } from "@/utils/models/types/utils/entityKeys";
import { type DataFields, type SubLinks } from "@/utils/models/types/utils/routeTypes";
import Data from "./Data";
import useCard from "./hooks/useCard";

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

  const displayTitle = useMemo(
    () => titleText ?? formatTitle(title),
    [titleText, title],
  );



  const shouldOverflow = useMemo(() => {
    if (!subObject || !subDataFields) return false;
    return subDataFields(subObject).length > 4;
  }, [subObject, subDataFields]);


  const windowWidth = useWindowWidth();

  const columnsMultiplier = windowWidth < 1200 ? 1 : 2;

  const mainGridFr = "auto_1fr"

  const gridFr = Array(columnsMultiplier).fill(mainGridFr).join("_1px_44px_");


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
        className={`grid ${headerWidth ? "grid-cols-[" + headerWidth + "px_1fr]" : `grid-cols-[${gridFr}_1px_1px]`} gap-x-2 gap-y-1 *:text-xl! *:odd:font-bold`}
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
                    method: "post",
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
