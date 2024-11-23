import { SignIn, SignUp, Home } from "../pages";
export const privateRoutes = [
  {
    path: "/home",
    component: <Home></Home>,
  },
];
export const publicRoutes = [
  {
    path: "/",
    component: <SignIn></SignIn>,
  },
  {
    path: "/sign-up",
    component: <SignUp></SignUp>,
  },
];
