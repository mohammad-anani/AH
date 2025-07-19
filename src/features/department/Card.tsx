import { useOutletContext } from "react-router-dom";
import type { Department } from "../../utils/models/types";
import Clickable from "@/ui/customComponents/Clickable";
import Data from "./Data";
import EntityCard from "@/ui/entityComponents/Card";

export default function Card() {
  const department = useOutletContext<Department>();
  const { ID } = department;

  return (
    <EntityCard title="Department" Data={<Data department={department} />}>
      <Clickable as="Back" variant="secondary">
        Show Doctors
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/human-resources/receptionists?DepartmentID=${ID}`}
        variant="secondary"
      >
        Show Receptionists
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/human-resources/admins?DepartmentID=${ID}`}
        variant="secondary"
      >
        Show Admins
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/human-resources/tests?DepartmentID=${ID}`}
        variant="secondary"
      >
        Show Tests
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/human-resources/operations?DepartmentID=${ID}`}
        variant="secondary"
      >
        Show Operations
      </Clickable>
    </EntityCard>
  );
}
