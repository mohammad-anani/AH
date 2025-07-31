import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import List from "../entityComponents/List";
import Clickable from "./Clickable";

type FilterEntititesProps = { fields: FilterKey[] };

export default function FilterEntities({ fields }: FilterEntititesProps) {
  return (
    <>
      <List.Filter fields={fields}>
        <List.Filter.Form />
        <hr className="border-primary h-[1px]" />
        <div className="grid grid-cols-[50px_1fr_30px] gap-x-2 text-sm!">
          <List.Filter.Sort />
          <List.Filter.Order />
        </div>
        <List.Filter.SearchButton>
          <Clickable as="button" variant="primary">
            Search
          </Clickable>
        </List.Filter.SearchButton>
      </List.Filter>
    </>
  );
}
