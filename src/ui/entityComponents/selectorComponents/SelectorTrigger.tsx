// SelectorTrigger.tsx

import { X } from "lucide-react";
import type { Setter } from "@/utils/models/types/util";
import Clickable from "@/ui/customComponents/Clickable";

type SelectorTriggerProps<T> = {
  object: T | undefined;
  setObject: Setter<T | undefined>;
  setStoredObject: Setter<T | undefined>;
  selectedDisplay: (item: T) => string;
  setIsOpen: (open: boolean) => void;
  entity: string;
};

export default function SelectorTrigger<T>({
  object,
  setObject,
  setStoredObject,
  selectedDisplay,
  setIsOpen,
  entity,
}: SelectorTriggerProps<T>) {
  if (!object) {
    return (
      <span>
        <Clickable
          style={{ fontSize: "inherit" }}
          as="button"
          variant="link"
          onClick={() => setIsOpen(true)}
        >
          {`Select ${entity}`}
        </Clickable>
      </span>
    );
  }

  return (
    <span className="flex h-auto items-center space-x-2 align-middle">
      <span>{selectedDisplay(object)}</span>
      <Clickable
        style={{ fontSize: "inherit" }}
        as="button"
        variant="link"
        onClick={() => setIsOpen(true)}
      >
        Modify
      </Clickable>
      <button
        onClick={() => {
          setStoredObject(undefined);
          setObject(undefined);
        }}
        aria-label={`Clear selected ${entity}`}
      >
        <X />
      </button>
    </span>
  );
}
