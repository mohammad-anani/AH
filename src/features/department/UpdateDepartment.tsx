import { Link, useOutletContext } from "react-router-dom";
import type { Department } from "../../utils/types";
import AddUpdateDepartment from "./AddUpdateDepartment";
import H2 from "@/ui/H2";
import Clickable from "@/ui/Clickable";

export default function UpdateDepartment() {
  const { department } = useOutletContext<{ department: Department }>();

  return (
    <>
      <Clickable
        as="Link"
        variant="secondary"
        to={`/admin/departments/${department.ID}`}
      >
        Cancel
      </Clickable>
      <H2>Edit Department</H2>
      <AddUpdateDepartment department={department} />
    </>
  );
}
