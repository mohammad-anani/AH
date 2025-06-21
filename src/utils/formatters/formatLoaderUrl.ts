export default function formatLoaderUrl(url: string) {
  const searchParams = new URLSearchParams(
    url.substring(url.includes("?") ? url.indexOf("?") : url.length),
  );

  const order = searchParams.get("order");
  const sort = searchParams.get("sort");

  if (order) {
    if (sort)
      searchParams.set("_sort", `${order === "desc" ? "-" : ""}${sort}`);
    else searchParams.set("_sort", `${order === "desc" ? "-" : ""}ID`);
  }

  if (!searchParams.get("page")) searchParams.set("page", "1");

  return searchParams;
}
