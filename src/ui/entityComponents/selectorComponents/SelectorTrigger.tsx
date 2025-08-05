// SelectorTrigger.tsx

import { PencilIcon, X } from "lucide-react";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { Setter } from "@/utils/models/types/utils/basics";
import Clickable from "@/ui/customComponents/Clickable";
import { DialogTrigger } from "@radix-ui/react-dialog";
import type { rowTypesObject } from "@/utils/models/types/row/rowTypesObject";

type SelectorTriggerProps<T extends rowTypesObject[EntityKey]> = {
  selectedObject: [T | undefined, Setter<T | undefined>];
  selectedDisplay: (item: T) => string;
  entity: string;
  disabled?: boolean;

  onDelete?: (object: T) => void;
};

export default function SelectorTrigger<T extends rowTypesObject[EntityKey]>({
  selectedObject,
  selectedDisplay,
  entity,
  disabled = false,
  onDelete,
}: SelectorTriggerProps<T>) {
  const [object, setObject] = selectedObject;

  const title = entity.startsWith("Test")
    ? entity.replace("Test", "Test ")
    : entity;

  if (!object?.["ID"]) {
    return (
      <span>
        <DialogTrigger>
          <Clickable
            disabled={disabled}
            type="button"
            style={{ fontSize: "inherit" }}
            as="button"
            variant="link"
          >
            {`Select ${title}`}
          </Clickable>
        </DialogTrigger>
      </span>
    );
  }

  return (
    <span className="flex h-auto items-center space-x-2 align-middle">
      <span>{selectedDisplay(object)}</span>
      {!disabled ? (
        <>
          <DialogTrigger>
            <Clickable
              disabled={disabled}
              style={{ fontSize: "inherit" }}
              className="align-middle"
              as="button"
              type="button"
              variant="link"
            >
              <PencilIcon className="w-[16px]" />
            </Clickable>
          </DialogTrigger>
          <button
            type="button"
            onClick={() => {
              onDelete?.(selectedObject?.[0] as T);
              setObject(undefined);
            }}
            className="align-middle"
            aria-label={`Clear selected ${entity}`}
          >
            <X className="w-[20px]" />
          </button>
        </>
      ) : null}
    </span>
  );
}
