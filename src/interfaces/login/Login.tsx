import { FormProvider, useForm } from "react-hook-form";
import {
  Form,
  useSubmit,
  useNavigate,
  type SubmitTarget,
} from "react-router-dom";
import { useEffect } from "react";
import Clickable from "@/ui/customComponents/Clickable";
import Logo from "@/ui/customComponents/Logo";
import RegisteredInput from "@/ui/customComponents/RegisteredInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/utils/models/zod/Login";
import { useDecodedJwt } from "@/utils/hooks/useDecodedJwt";

export default function Login() {
  const methods = useForm({ resolver: zodResolver(LoginSchema) });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const submit = useSubmit();
  const navigate = useNavigate();
  const { decoded, expired } = useDecodedJwt();

  // Check for valid token and redirect if authenticated
  useEffect(() => {
    if (decoded && !expired && decoded.role) {
      // Redirect based on role
      if (decoded.role === "Admin") {
        navigate("/admin");
      } else if (decoded.role === "Receptionist") {
        navigate("/receptionist");
      } else if (decoded.role === "Doctor") {
        navigate("/doctor");
      }
    }
  }, [decoded, expired, navigate]);

  return (
    <main className="mt-20 grid content-center gap-y-4" role="main">
      <header className="text-center">
        <Logo className="h-auto! w-auto! text-9xl!" />
        <h1 className="sr-only">Hospital Management System Login</h1>
      </header>

      <section className="flex justify-center" aria-label="Login form">
        <FormProvider {...methods}>
          <Form
            onSubmit={handleSubmit((data) => {
              submit(data as SubmitTarget, {
                method: "POST",
                encType: "application/json",
              });
            })}
            className="flex flex-col items-center gap-y-4 text-xl"
            aria-label="Login credentials"
          >
            <fieldset
              className="grid grid-cols-[120px_1fr] gap-y-2"
              disabled={isSubmitting}
            >
              <legend className="sr-only">Login Credentials</legend>

              <label htmlFor="email-input" className="pr-2 text-right">
                Email:
              </label>
              <RegisteredInput name="email">
                <input
                  id="email-input"
                  type="text"
                  autoComplete="email"
                  aria-required="true"
                  autoFocus
                />
              </RegisteredInput>

              <label htmlFor="password-input" className="pr-2 text-right">
                Password:
              </label>
              <RegisteredInput name="Password">
                <input
                  id="password-input"
                  type="password"
                  autoComplete="current-password"
                  aria-required="true"
                />
              </RegisteredInput>
            </fieldset>

            <Clickable
              className="w-[120px]"
              variant="primary"
              as="button"
              type="submit"
              disabled={isSubmitting}
              aria-label={isSubmitting ? "Logging in..." : "Login to system"}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </Clickable>
          </Form>
        </FormProvider>
      </section>
    </main>
  );
}
