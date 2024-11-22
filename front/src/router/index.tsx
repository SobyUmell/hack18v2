import { SignIn } from "../pages";
export const privateRoutes = [{}];
export const publicRoutes = [
  {
    path: "/sign-in",
    Component: <SignIn></SignIn>,
    exact: true,
  },
];
