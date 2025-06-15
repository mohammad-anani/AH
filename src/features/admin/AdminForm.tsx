import type { Admin } from "../../utils/types";
import { emptyAdmin } from "../../utils/emptyObjects";
import EmployeeForm from "../employee/EmployeeForm";

export default function AdminForm({ admin = emptyAdmin }: { admin?: Admin }) {
  return <EmployeeForm employee={admin.Employee} />;
}
