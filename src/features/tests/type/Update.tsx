import type { TestType } from "@/utils/models/types";

import { useOutletContext } from "react-router-dom";
export default function Update() {
  const { type } = useOutletContext<{ type: TestType }>();

  return <div>Update Test Type</div>;
}
