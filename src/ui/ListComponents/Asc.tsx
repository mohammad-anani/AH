import { useEffect } from "react";
import useListContext from "./context";

export function Asc() {
  const { setOrder } = useListContext();

  useEffect(() => {
    setOrder("asc");
  }, [setOrder]);
  return <></>;
}
