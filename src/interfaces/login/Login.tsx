import { FormProvider, useForm } from "react-hook-form";
import {
  Form,
  useNavigate,
  replace,
} from "react-router-dom";
import Clickable from "@/ui/customComponents/Clickable";
import Logo from "@/ui/customComponents/Logo";
import RegisteredInput from "@/ui/customComponents/RegisteredInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/utils/models/zod/Login";
import { useDecodedJwt } from "@/utils/hooks/useDecodedJwt";
import { login } from "@/api/login";
import { useState } from "react";

export default function Login() {
  const methods = useForm({ resolver: zodResolver(LoginSchema) });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const navigate = useNavigate();
  const { decoded, expired } = useDecodedJwt();
  // Check for valid token and redirect if authenticated

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

  const [isFailed, setIsFailed] = useState(false);

  function loginFn() {
    return async (data: {
      Email: string;
      Password: string;
    }) => {


      if (!(data.Email && data.Password)) {
        return replace("/");
      }

      const { ID, Token, Role, RefreshToken } = await login(data.Email, data.Password);

      if (!(Token != -1 && RefreshToken && ID && Role)) {

        methods.reset();
        setIsFailed(true);
        return;
      }
      console.log(Role);
      localStorage.setItem("token", Token);
      localStorage.setItem("refresh-token", RefreshToken);

      if (Role === "Admin") return navigate("/admin", { replace: true });
      if (Role === "Receptionist") return navigate("/receptionist", { replace: true });
      if (Role === "Doctor") return navigate("/doctor", { replace: true });

    };
  }


  return (
    <main className="mt-20 grid content-center gap-y-4" role="main">
      <header className="text-center">
        <Logo className="h-auto! w-auto! text-9xl!" />
        <h1 className="sr-only">Hospital Management System Login</h1>
      </header>

      <section className="flex justify-center" aria-label="Login form">
        <FormProvider {...methods}>
          <Form
            onSubmit={handleSubmit(loginFn())}
            className="flex flex-col items-center gap-y-4 text-xl"
            aria-label="Login credentials"
          >
            <div
              className="grid grid-cols-[120px_1fr] gap-y-2"
            >

              <label htmlFor="email-input" className="pr-2 text-right">
                Email:
              </label>
              <RegisteredInput name="Email">
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
              {isFailed ? <label className="text-[15px] col-span-2  text-destructive! text-center">Invalid Username and/or Password!</label> : null}
            </div>

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
