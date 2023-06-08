import { useAsideOption } from "../../hooks/useOption";

import ToggleSwitch from "../_Atoms/ToggleSwitch";

function AsideOption() {
  const { asideOption, updateAsideOption } = useAsideOption();

  return (
    <div className="aside-option">
      <ToggleSwitch
        label="Animation"
        value={asideOption.animation}
        onChange={(value) => updateAsideOption({ animation: value })}
      />
      <ToggleSwitch
        label="Dark Mode"
        value={asideOption.darkMode}
        onChange={(value) => updateAsideOption({ darkMode: value })}
      />
    </div>
  );
}

export default AsideOption;
