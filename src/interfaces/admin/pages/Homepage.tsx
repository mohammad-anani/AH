import Selector from "@/ui/entityComponents/Selector";
import { selectorConfig } from "@/utils/models/componentsConfig/selectorConfig";
import type { rowTypesObject } from "@/utils/models/types/rowTypesObject";

import { useState } from "react";

export default function Homepage() {
  const state = useState<rowTypesObject["Department"]>();
  const [department] = state;
  return (
    <>
      <h1>{department ? department.Name : "No Deparmtent yet"}</h1>
      <Selector
        entity="Department"
        {...selectorConfig["Department"]}
        selectedObjectState={state}
      />
    </>
  );
}
