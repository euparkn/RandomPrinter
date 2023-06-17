import { useRecoilValue } from "recoil";
import { optionsAtom } from "../store";
import Main from "./Main";
import Toast from "../components/_Atoms/Toast";

function App() {
  const options = useRecoilValue(optionsAtom);
  return (
    <div
      className="App"
      data-theme={options.darkMode ? "dark" : "light"}
      data-testid="app"
    >
      <Main />
      <Toast />
    </div>
  );
}

export default App;
