import type { Key } from "@/utils/models/types";
import List from "./List";
import Clickable from "./Clickable";

export default function FilterEntities({ fields }: { fields: Key[] }) {
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
