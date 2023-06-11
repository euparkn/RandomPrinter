import { NavLink } from "react-router-dom";
import Printer from "../Printer";
import AsideToggleButton from "../_Atoms/AsideTogglebutton";

function Content() {
  return (
    <div className="content">
      <div className="content-section">
        <Printer />
        <AsideToggleButton />
        <NavLink to="/result">result</NavLink>
      </div>
    </div>
  );
}

export default Content;
