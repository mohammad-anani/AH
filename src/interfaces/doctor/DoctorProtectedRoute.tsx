import throwError from "@/utils/helpers/throwError";
import { useDecodedJwt } from "@/utils/hooks/useDecodedJwt";
import { Outlet } from "react-router-dom";

export default function DoctorProtectedRoute() {
  const decoded = useDecodedJwt();

  if (decoded.decoded?.role !== "Doctor")
    throwError(401, "Only admins can access this page.");
  return <Outlet />;
}
