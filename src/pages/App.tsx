import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { optionsAtom } from "../store";
import { routers } from "../_router";

const router = createBrowserRouter(routers);

function App() {
  const options = useRecoilValue(optionsAtom);
  return (
    <div
      className="App"
      data-theme={options.darkMode ? "dark" : "light"}
      data-testid="app"
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
