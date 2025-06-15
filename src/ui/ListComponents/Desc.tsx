import { useEffect } from "react";
import useListContext from "./context";

export function Desc() {
  const { setOrder } = useListContext();
  useEffect(() => {
    setOrder("desc");
  }, [setOrder]);
  return <></>;
}
