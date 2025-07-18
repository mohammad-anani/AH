import { Outlet, useLoaderData } from "react-router-dom";
export default function ViewEdit() {
  const { type } = useLoaderData();

  return <Outlet context={type} />;
}
