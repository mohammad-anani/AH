import { FormProvider, useForm } from "react-hook-form";
import { Form, useSubmit, type SubmitTarget } from "react-router-dom";
import Clickable from "@/ui/customComponents/Clickable";
import Logo from "@/ui/customComponents/Logo";
import RegisteredInput from "@/ui/customComponents/RegisteredInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/utils/models/zod/Login";

export default function Login() {
  const methods = useForm({ resolver: zodResolver(LoginSchema) });
  const { handleSubmit } = methods;
  const submit = useSubmit();

  return (
    <main className="mt-20 grid content-center gap-y-4">
      <Logo className="h-auto! w-auto! text-9xl!" />
      <div className="flex justify-center">
        {/* no longer use <Form> from react-router-dom here */}
        <FormProvider {...methods}>
          <Form
            onSubmit={handleSubmit((data) => {
              submit(data as SubmitTarget, {
                method: "POST",
                encType: "application/json",
              });
            })}
            className="flex flex-col items-center gap-y-4 text-xl"
          >
            <div className="grid grid-cols-[120px_1fr] gap-y-2">
              <label htmlFor="username">Username:</label>
              <RegisteredInput name="Username">
                <input type="text" />
              </RegisteredInput>

              <label htmlFor="password">Password:</label>
              <RegisteredInput name="Password">
                <input type="password" />
              </RegisteredInput>
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
        </FormProvider>
      </div>
    </main>
  );
}
