import Aside from "components/Aside";
import Content from "components/Content";
import AsideToggleButton from "components/_Atoms/AsideTogglebutton";
import Copyright from "components/_Atoms/Copyright";

function Main() {
  return (
    <div className="main">
      <Content />
      <Aside />
      <AsideToggleButton />
      <Copyright />
    </div>
  );
}

export default Main;
