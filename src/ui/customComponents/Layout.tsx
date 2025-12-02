import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import type { ChildrenProps } from "@/utils/models/types/utils/basics";
import { MoonLoader } from "react-spinners";

export default function Layout({ children, count }: ChildrenProps & { count: number }) {
  const { state } = useNavigation();
  const isLoading = state === "loading";


  return (
    <>
      <Header count={count}>{children}</Header>

      <main className="min-h-full! space-y-2 space-x-2 rounded-none! px-[10px] pt-[80px] pb-[20px]">
        {isLoading ? (
          <MoonLoader
            size={60}
            color="#1838af"
            className="mt-[calc(40dvh-30px)] mr-auto ml-auto"
          />
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
}
