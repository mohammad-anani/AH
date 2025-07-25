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
import {
  type dataFields,
  type EntityKey,
  type SubLinks,
} from "@/utils/models/types/util";
import type { typesObject } from "@/utils/models/types/typesObject";
import Data from "./Data";
import { useEffect, useState } from "react";
import { cardConfig } from "@/utils/models/componentsConfig/cardConfig";

type CardProps<T extends EntityKey> = {
  title: EntityKey;
  data?: typesObject[T];
  subLinks: SubLinks<T>;
  dataFields: dataFields<T>;
  isModal: boolean;
  isNestedCard?: boolean;
  canEdit?: boolean;
  canDelete?: boolean;
  headerWidth?: number;
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

  headerWidth = 150,
}: CardProps<T>) {
  const loaderData = useOutletContext<typesObject[T]>();

  const object = data ?? loaderData;

  const [SubCard, setSubCard] = useState<[EntityKey, string] | undefined>(
    undefined,
  );

  const fetcher = useFetcher();

  const [subEntity, subLink] = SubCard as [EntityKey, string];

  useEffect(() => {
    if (subLink) fetcher.load(subLink);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subLink]);

  if (SubCard && fetcher.data) {
    const { subLinks, dataFields } = cardConfig[subEntity];

    const object = fetcher.data;
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
          className={`mt-[5px] max-h-[260px] ${dataFields(object).length > 4 ? "overflow-y-scroll" : ""}`}
        >
          <Card
            title={subEntity}
            subLinks={subLinks as SubLinks<typeof subEntity>}
            dataFields={dataFields as dataFields<typeof subEntity>}
            canDelete={false}
            canEdit={false}
            isModal={true}
            isNestedCard={true}
            data={fetcher.data}
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
        {!isModal ? <H2>{title}</H2> : null}
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
