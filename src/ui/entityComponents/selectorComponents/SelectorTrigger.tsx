// SelectorTrigger.tsx

import { PencilIcon, X } from "lucide-react";
import type { EntityKey, Setter } from "@/utils/models/types/util";
import Clickable from "@/ui/customComponents/Clickable";
import { DialogTrigger } from "@radix-ui/react-dialog";
import type { rowTypesObject } from "@/utils/models/types/rowTypesObject";

type SelectorTriggerProps<T extends rowTypesObject[EntityKey]> = {
  object: T | undefined;
  setObject: Setter<T | undefined>;
  selectedDisplay: (item: T) => string;
  entity: string;
};

export default function SelectorTrigger<T extends rowTypesObject[EntityKey]>({
  object,
  setObject,
  selectedDisplay,
  entity,
}: SelectorTriggerProps<T>) {
  if (!object?.["ID"]) {
    return (
      <span>
        <DialogTrigger>
          <Clickable
            type="button"
            style={{ fontSize: "inherit" }}
            as="button"
            variant="link"
          >
            {`Select ${entity}`}
          </Clickable>
        </DialogTrigger>
      </span>
    );
  }

  return (
    <span className="flex h-auto items-center space-x-2 align-middle">
      <span>{selectedDisplay(object)}</span>
      <DialogTrigger>
        <Clickable
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
        onClick={() => {
          setObject(undefined);
        }}
        className="align-middle"
        aria-label={`Clear selected ${entity}`}
      >
        <X className="w-[20px]" />
      </button>
    </span>
  );
}
