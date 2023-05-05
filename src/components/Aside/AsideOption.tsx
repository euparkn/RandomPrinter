import ToggleSwitch from "../_Atoms/ToggleSwitch";
import { useAsideOption } from "./hooks/useOption";

function AsideOption() {
  const { updateAsideOption } = useAsideOption();

  return (
    <>
      <ToggleSwitch
        label="Animation"
        onChange={(value) => updateAsideOption({ animation: value })}
      />
      <ToggleSwitch
        label="Remove picked item"
        onChange={(value) => updateAsideOption({ removePickedItem: value })}
      />
    </>
  );
}

export default AsideOption;
