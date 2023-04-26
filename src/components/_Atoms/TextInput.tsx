interface IProps {
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

function TextInput({
  placeholder = "",
  value = "",
  disabled = false,
  onChange,
}: IProps) {
  return (
    <label>
      <input
        className="text-input"
        type="text"
        placeholder={placeholder}
        defaultValue={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export default TextInput;
