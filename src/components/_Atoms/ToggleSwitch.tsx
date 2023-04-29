import Text from "./Text";

interface IProps {
  label?: string;
  value?: boolean;
  onChange?: () => void;
}
function ToggleSwitch({ label, value = false, onChange }: IProps) {
  return (
    <label className="toggle_switch">
      {label && <Text text={label} />}
      <input type="checkbox" defaultChecked={value} onChange={onChange} />
      <span />
    </label>
  );
}

export default ToggleSwitch;
