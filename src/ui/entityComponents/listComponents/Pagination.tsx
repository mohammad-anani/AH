import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import useListContext from "./context";

export default function Pagination({ itemsCount }: { itemsCount: number }) {
  const sparms = useSearchParams();

  const { UrlState } = useListContext();

  const [searchParams, setSearchParams] = UrlState ?? sparms;

  return (
    <ReactPaginate
      pageCount={Math.ceil(itemsCount / +import.meta.env.VITE_ITEMS_PER_PAGE)}
      renderOnZeroPageCount={() => <></>}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      previousLabel={<ChevronLeft />}
      nextLabel={<ChevronRight />}
      breakLabel="..."
      disabledClassName="bg-muted! pointer-events-none   "
      className="*:hover:bg-background-darker! flex items-center space-x-4 text-xl! *:flex *:h-[30px] *:w-[30px] *:place-content-center *:items-center *:bg-white **:align-middle"
      activeClassName="*:text-primary! bg-background-dark! font-bold"
      onPageChange={(event) => {
        const pageIndex = event.selected;
        const params = new URLSearchParams(searchParams.toString());

        if (pageIndex === 0) {
          params.delete("page");
          setSearchParams(params);
          return;
        }

        params.set("page", String(pageIndex + 1));
        setSearchParams(params);
      }}
    />
  );
}
