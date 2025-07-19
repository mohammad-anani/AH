import type { TestType } from "@/utils/models/types";
import { useOutletContext } from "react-router-dom";
import ECard from "@/ui/entityComponents/Card";
import Data from "./Data";
export default function Card() {
  const type = useOutletContext<TestType>();

  return (
    <ECard
      title="Test Type"
      Data={<Data type={type} />}
      canEdit={true}
      canDelete={true}
    ></ECard>
  );
}
