import Aside from "../components/Aside";
import Content from "../components/Content";
import AsideToggleButton from "../components/_Atoms/AsideTogglebutton";

function Main() {
  return (
    <div className="main">
      <Content />
      <Aside />
      <AsideToggleButton />
    </div>
  );
}

export default Main;
