import { useOutletContext } from "react-router-dom";
import type { Admin } from "../../utils/models/types";
import Clickable from "@/ui/Clickable";
import AdminData from "./AdminData";
import Card from "@/ui/Card";

export default function AdminCard() {
  const { admin } = useOutletContext<{ admin: Admin }>();
  const { ID } = admin;

  return (
    <Card
      title="Admin"
      backLink="/admin/human-resources/admins"
      Data={<AdminData admin={admin} />}
    >
      <Clickable
        as="Link"
        to={`/admins/departments?AdminID=${ID}`}
        variant="secondary"
      >
        Show Departments
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/tests?AdminID=${ID}`}
        variant="secondary"
      >
        Show Tests
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/receptionists?AdminID=${ID}`}
        variant="secondary"
      >
        Show Receptionists
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/admins?AdminID=${ID}`}
        variant="secondary"
      >
        Show Admins
      </Clickable>
    </Card>
  );
}
