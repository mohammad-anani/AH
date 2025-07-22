import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function useFilter(UrlState: string) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    setIsFilterOpen(false);
  }, [searchParams, UrlState]);

  return { isFilterOpen, setIsFilterOpen };
}

//why modal close when go to details,do select
