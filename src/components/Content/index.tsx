import Printer from "../Printer";
import AsideToggleButton from "../_Atoms/AsideTogglebutton";

function Content() {
  return (
    <div className="content">
      <div className="content-section">
        <Printer />
        <AsideToggleButton />
      </div>
    </div>
  );
}

export default Content;
