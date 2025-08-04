import { Outlet } from "react-router-dom";

export default function ReceptionistProtectedRoute() {
  // if (true) return <Navigate to="/" />;

  // throwError(401, "Unauthorized access", "Only admins can access this page.");

  return <Outlet />;
}
