import { useAsideOption } from "../../hooks/useOption";
import ToggleSwitch from "../_Atoms/ToggleSwitch";

function AsideOption() {
  const { updateAsideOption } = useAsideOption();

  return (
    <div className="aside-option">
      <ToggleSwitch
        label="Animation"
        onChange={(value) => updateAsideOption({ animation: value })}
      />
      <ToggleSwitch
        label="Remove picked item"
        onChange={(value) => updateAsideOption({ removePickedItem: value })}
      />
    </div>
  );
}

export default AsideOption;
