import Text from "components/_Atoms/Text";

interface IProps {
  label?: string;
  value?: boolean;
  onChange: (value: boolean) => void;
}
function ToggleSwitch({ label, value = false, onChange }: IProps) {
  return (
    <label className="toggle_switch">
      {label && <Text text={label} />}
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
      <span />
    </label>
  );
}

export default ToggleSwitch;
