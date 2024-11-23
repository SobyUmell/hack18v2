import { SignIn, SignUp, Home } from "../pages";
import CreateTask from "../pages/create-task/ui/CreateTask";
import TaskView from "../pages/task-view/ui/TaskView";
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
  {
    path: "/newtask",
    component: <CreateTask />,
  },
  {
    path: "/viewtask",
    component: <TaskView />,
  },
];
