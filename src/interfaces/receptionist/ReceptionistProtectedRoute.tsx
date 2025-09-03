import throwError from "@/utils/helpers/throwError";
import { useDecodedJwt } from "@/utils/hooks/useDecodedJwt";
import { Outlet } from "react-router-dom";

export default function ReceptionistProtectedRoute() {
  const decoded = useDecodedJwt();

  if (decoded.decoded?.role !== "Receptionist")
    throwError(401, "Only admins can access this page.");

  return <Outlet />;
}
