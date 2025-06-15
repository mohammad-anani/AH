import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function useFilter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    setIsFilterOpen(false);
  }, [searchParams]);

  return { isFilterOpen, setIsFilterOpen };
}
