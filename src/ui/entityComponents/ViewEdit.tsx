import type { typesObject } from "@/utils/models/types/typesObject";
import type { EntityKey } from "@/utils/models/types/util";
import { Outlet, useLoaderData } from "react-router-dom";

export default function ViewEdit<T extends EntityKey>() {
  const data = useLoaderData() as typesObject[T];

  return <Outlet context={data} />;
}
