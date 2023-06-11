import Main from "./pages/Main";
import Result from "./components/Result";

export const routers = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/result",
    element: <Result />,
  },
];
