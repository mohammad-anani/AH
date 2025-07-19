import ListPage from "@/ui/entityComponents/ListPage";
import type { Department } from "@/utils/models/types";

export default function Departments() {
  return (
    <ListPage<Department>
      title="Departments"
      canAdd
      rowTemplate={[
        ["Name", "Phone"],
        ({ Name, Phone }) => [Name, Phone],
        [2, 1],
      ]}
      filterFields={[
        ["Name", "string"],
        ["Phone", "phone"],
        ["AdminID", "string"],
        ["CreatedAt", "datetime"],
      ]}
    />
  );
}
