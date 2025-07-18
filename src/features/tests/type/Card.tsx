import type { TestType } from "@/utils/models/types";
import { useOutletContext } from "react-router-dom";
export default function Card() {
  const { type } = useOutletContext<{ type: TestType }>();

  return <div>Test Type Card</div>;
}
