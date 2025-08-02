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
  subLinksObject?: {
    [K in EntityKey]: SubLinks<K>;
  };
  dataFieldsObject?: {
    [K in EntityKey]: DataFields<K>;
  };
};

export default function Card<T extends EntityKey>({
  title,
  canEdit = true,
  canDelete = true,
  data,
  isNestedCard = false,
  isModal = false,
  subLinks,
  dataFields,
  titleText,
  subLinksObject,
  dataFieldsObject,
}: CardProps<T>) {
  const {
    subEntity,
    setSubCard,
    subSubLinks,
    subDataFields,
    object,
    subObject,
    fetcher,
  } = useCard<T>(subLinksObject, dataFieldsObject, data);

  if (subSubLinks && subObject && subDataFields) {
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
          className={`mt-[5px] max-h-[260px] ${subDataFields(subObject).length > 4 ? "overflow-y-scroll" : ""}`}
        >
          <Card
            title={subEntity}
            subLinks={subSubLinks as SubLinks<typeof subEntity>}
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
        {!isModal ? <H2>{titleText ?? formatTitle(title)}</H2> : null}
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
        className={`grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 *:text-xl! *:odd:font-bold`}
      >
        <Data<T>
          isNestedCard={isNestedCard}
          data={object}
          fields={dataFields}
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
