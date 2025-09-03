import throwError from "@/utils/helpers/throwError";
import { useDecodedJwt } from "@/utils/hooks/useDecodedJwt";
import { Outlet } from "react-router-dom";

export default function AdminProtectedRoute() {
  const decoded = useDecodedJwt();

  if (decoded.decoded?.role !== "Admin")
    throwError(401, "Only admins can access this page.");

  return <Outlet />;
}
