import { useRecoilValue } from "recoil";
import Main from "./Main";
import { optionsAtom } from "../store";

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
