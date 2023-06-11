import { useOptions } from "../../hooks/useOptions";

import ToggleSwitch from "../_Atoms/ToggleSwitch";

function Options() {
  const { options, updateOptions } = useOptions();

  return (
    <div className="options">
      <ToggleSwitch
        label="Animation"
        value={options.animation}
        onChange={(value) => updateOptions({ animation: value })}
      />
      <ToggleSwitch
        label="Dark Mode"
        value={options.darkMode}
        onChange={(value) => updateOptions({ darkMode: value })}
      />
    </div>
  );
}

export default Options;