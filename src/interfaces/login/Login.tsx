import Clickable from "@/ui/Clickable";
import Logo from "@/ui/Logo";
import { Form } from "react-router-dom";

export default function Login() {
  return (
    <main className="mt-20 grid content-center gap-y-4">
      <Logo className="h-auto! w-auto! text-9xl!" />
      <div className="flex justify-center">
        <Form
          method="POST"
          className="flex flex-col items-center gap-y-4 text-xl"
        >
          <div className="grid grid-cols-[120px_1fr] gap-y-2">
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" />

            <label htmlFor="password">Password:</label>
            <input type="password" name="password" />
          </div>

          <Clickable
            className="w-[120px]"
            variant="primary"
            as="button"
            type="submit"
          >
            Login
          </Clickable>
        </Form>
      </div>
    </main>
  );
}
