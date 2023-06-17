import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { optionsAtom } from "../store";
import Main from "./Main";
import Toast from "../components/_Atoms/Toast";

function App() {
  const options = useRecoilValue(optionsAtom);

  const app = useMemo(
    () => (
      <div
        className="App"
        data-theme={options.darkMode ? "dark" : "light"}
        data-testid="app"
      >
        <Main />
        <Toast />
      </div>
    ),
    [options.darkMode]
  );

  return app;
}

export default App;
