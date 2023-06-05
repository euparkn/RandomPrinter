import { useRecoilValue } from "recoil";
import Main from "./Main";
import { asideOptionAtom } from "../store";

function App() {
  const asideOption = useRecoilValue(asideOptionAtom);
  return (
    <div
      className="App"
      data-theme={asideOption.darkMode ? "dark" : "light"}
      data-testid="app"
    >
      <Main />
    </div>
  );
}

export default App;
