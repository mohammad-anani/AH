import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import { Outlet, useLoaderData } from "react-router-dom";

export default function ViewEdit<T extends EntityKey>() {
  const data = useLoaderData() as typesObject[T];

  return <Outlet context={data} />;
}
