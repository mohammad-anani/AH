import type { Key } from "@/utils/models/types/util";
import { useEffect, useState } from "react";

export default function useFilter(
  filterFields: Key[],
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check once on mount
    const anyOpenSelector = filterFields.some(([key, type]) => {
      if (type === "selector") {
        const sessionValue = sessionStorage.getItem(`is${key}SelectorOpen`);
        return sessionValue === "true";
      }
      return false;
    });

    if (anyOpenSelector) {
      setIsFilterOpen(true);
    }
  }, []); // only run on initial mount

  return [isFilterOpen, setIsFilterOpen];
}
