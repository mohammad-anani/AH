import type { ActionFunctionArgs } from "react-router-dom";

export default async function addUpdateAction({ request }: ActionFunctionArgs) {
  console.log(await request.json());
}
