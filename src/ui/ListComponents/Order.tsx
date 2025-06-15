import { ArrowDownAZ, ArrowUpAZ } from "lucide-react";
import Toggle from "../Toggle";
import { Asc } from "./Asc";
import { Desc } from "./Desc";
import useListContext from "./context";

export default function Order() {
  const { order } = useListContext();

  return (
    <Toggle isOn={order === "desc"}>
      <Toggle.Enabler>
        <ArrowDownAZ className="h-[25px] w-[25px]" />
      </Toggle.Enabler>
      <Toggle.Disabler>
        <ArrowUpAZ className="h-[25px] w-[25px]" />
      </Toggle.Disabler>

      <Toggle.OffUI>
        <Asc />
      </Toggle.OffUI>
      <Toggle.OnUI>
        <Desc />
      </Toggle.OnUI>
    </Toggle>
  );
}
