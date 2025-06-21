import type { OptionalChildrenProps } from "@/utils/models/types";
import useListContext from "./context";

export default function Items<T>({
  children = <></>,
  render,
  emptyText,
  itemsCount,
}: OptionalChildrenProps & {
  render: (item: T, index: number) => React.ReactNode;
  emptyText?: string;
  itemsCount: number;
}) {
  const { items } = useListContext<T>();

  if (items.length > 0)
    return (
      <ul className="*:even:bg-background-dark *:first:bg-primary! *:first:*:text-background! my-2 shadow-[0px_0px_10px_rgba(0,0,0,0.2)] *:items-center *:rounded-none! *:px-2 *:py-2 *:*:text-xl! *:first:grid *:first:rounded-[6px_6px_0px_0px]! *:first:border-b-[2px] *:first:border-black *:last:rounded-[0px_0px_6px_6px]! *:odd:bg-white">
        {children}
        {items.map(render)}
        <li
          key="footer"
          className="bg-primary! *:text-background! text-background! flex justify-end gap-x-1 border-t-[2px] border-black *:font-bold"
        >
          <span>{itemsCount}</span>
          records
        </li>
      </ul>
    );
  else return <p className="text-center text-xl!">{emptyText}</p>;
}
