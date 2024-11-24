import { SignIn, SignUp, Home } from "../pages";
import CreateTask from "../pages/create-task/ui/CreateTask";
import TaskView from "../pages/task-view/ui/TaskView";
import { CalendarPage } from "../pages/calendar-page";
import { ConbanPage } from "../pages/conban-page";
import { Graph } from "../pages/graph";
export const privateRoutes = [
  {
    path: "/home",
    component: <Home></Home>,
  },
  {
    path: "/newtask",
    component: <CreateTask />,
  },
  {
    path: "/viewtask",
    component: <TaskView />,
  },
  {
    path: "/calendar",
    component: <CalendarPage />,
  },
  {
    path: "/conban",
    component: <ConbanPage />,
  },
  {
    path: "/graph",
    component: <Graph />,
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
