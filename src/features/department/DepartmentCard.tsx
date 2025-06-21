import { useOutletContext } from "react-router-dom";
import type { Department } from "../../utils/models/types";
import Clickable from "@/ui/Clickable";
import DepartmentData from "./DepartmentData";
import Card from "@/ui/Card";

export default function DepartmentCard() {
  const { department } = useOutletContext<{ department: Department }>();
  const { ID } = department;

  return (
    <Card
      title="Department"
      backLink="/admin/departments"
      Data={<DepartmentData department={department} />}
    >
      <Clickable
        as="Link"
        to={`/admin/human-resources/doctors?DepartmentID=${ID}`}
        variant="secondary"
      >
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
    </Card>
  );
}
