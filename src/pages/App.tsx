import { useRecoilValue } from "recoil";
import { optionsAtom } from "../store";
import Main from "./Main";

function App() {
  const options = useRecoilValue(optionsAtom);
  return (
    <div
      className="App"
      data-theme={options.darkMode ? "dark" : "light"}
      data-testid="app"
    >
      <Main />
    </div>
  );
}

export default App;
