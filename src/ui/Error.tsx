import { CircleX } from "lucide-react";
import Logo from "./customComponents/Logo";
import Clickable from "./customComponents/Clickable";
import BackNavigator from "./customComponents/BackNavigator";
import { UNSAFE_ErrorResponseImpl, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError() as UNSAFE_ErrorResponseImpl;
  return (
    <main className="mt-20 grid content-center gap-y-4">
      <Logo className="h-auto! w-auto! text-9xl!" />
      <div>
        <p className="space-x-1 text-center text-xl">
          <CircleX className="inline" />
          <span>{error.status}</span>
          <span>{error.statusText}</span>
        </p>
        <p className="text-center">{error.data}</p>
      </div>
      <div className="flex justify-center space-x-2">
        <Clickable as="Link" variant="primary" to="/">
          Go to login
        </Clickable>
        <BackNavigator pagesBack={1}>
          <Clickable as="Link" variant="secondary">
            Go back
          </Clickable>
        </BackNavigator>
      </div>
    </main>
  );
}
