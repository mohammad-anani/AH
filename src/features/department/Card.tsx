import { useOutletContext } from "react-router-dom";
import type { Department } from "../../utils/models/types";

import Data from "./Data";
import EntityCard from "@/ui/entityComponents/Card";

export default function Card() {
  const department = useOutletContext<Department>();
  const { ID } = department;

  return (
    <EntityCard
      title="Department"
      subLinks={[
        ["Show Doctors", ""],
        [
          "Show Receptionists",
          `/admin/human-resources/receptionists?DepartmentID=${ID}`,
        ],
        ["Show Admins", `/admin/human-resources/admins?DepartmentID=${ID}`],
        ["Show Tests", `/admin/human-resources/tests?DepartmentID=${ID}`],
        [
          "Show Operations",
          `/admin/human-resources/operations?DepartmentID=${ID}`,
        ],
      ]}
    >
      <Data department={department} />
    </EntityCard>
  );
}
