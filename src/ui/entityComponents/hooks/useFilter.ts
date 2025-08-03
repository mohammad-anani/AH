import { useEffect, useState } from "react";

export default function useFilter(
  searchParamsString?: string,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsFilterOpen(false);
  }, [searchParamsString]);

  return [isFilterOpen, setIsFilterOpen];
}
