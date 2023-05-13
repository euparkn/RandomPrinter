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
    <fieldset className="text-input">
      <label>
        <input
          type="text"
          placeholder={placeholder}
          defaultValue={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </fieldset>
  );
}

export default TextInput;
