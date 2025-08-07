import type { EntityKey } from "@/utils/models/types/utils/entityKeys";

import type { rowTypesObject } from "@/utils/models/types/row/rowTypesObject";

import { useLoaderData } from "react-router-dom";
import { Info } from "lucide-react";
import type z from "zod";
import type { OperationDoctorRowSchema } from "@/utils/models/zod/rowSchemas/OperationDoctor";
import H2 from "@/ui/customComponents/H2";
import Clickable from "@/ui/customComponents/Clickable";
import List from "@/ui/entityComponents/List";

export default function OperationDoctorListPage<T extends EntityKey>({
  detailsLink,
}: {
  detailsLink: (ID: number) => string;
}) {
  const [doctors, itemsCount] = useLoaderData();

  const gridStyle = {
    display: "grid",
    gap: "5px",
    gridTemplateColumns: "2fr 2fr 1fr",
  };

  const render = (item: z.infer<typeof OperationDoctorRowSchema>) => {
    return (
      <li style={gridStyle} key={item?.Doctor?.["ID"]}>
        <span>{item.Doctor.Name}</span>
        <span>{item.Role as string}</span>
        <Clickable
          className="flex! items-center gap-x-1"
          variant="secondary"
          as={"Link"}
          to={
            detailsLink
              ? detailsLink(item?.Doctor?.["ID"])
              : `${item?.Doctor?.["ID"]}`
          }
        >
          <Info className="*:text-primary! h-[20px] w-[20px]" />
          Details
        </Clickable>
      </li>
    );
  };

  return (
    <>
      <Clickable className="text-sm!" as="Back" variant="secondary">
        Back
      </Clickable>

      <H2 className="mb-6">Operation Doctors</H2>

      <List<rowTypesObject[T]> items={doctors}>
        <List.Items<rowTypesObject[T]>
          render={render}
          Header={
            <li key="Header" style={gridStyle}>
              <span>Name</span>
              <span>Role</span>
            </li>
          }
          itemsCount={itemsCount}
        />
        <List.Pagination itemsCount={itemsCount} />
      </List>
    </>
  );
}
