import Login from "@/interfaces/login/Login";
import loginAction from "@/interfaces/login/loginAction";

export const authRoutes = [
  {
    path: "/",
    Component: Login,
    action: loginAction,
  },
];
