interface IProps {
  placeholder?: string;
  value?: string;
  maxLength?: number;
  disabled?: boolean;
  onChange: (value: string) => void;
}

function TextInput({
  placeholder = "",
  value = "",
  disabled = false,
  maxLength,
  onChange,
}: IProps) {
  return (
    <fieldset className="text-input">
      <label>
        <input
          type="text"
          placeholder={placeholder}
          defaultValue={value}
          maxLength={maxLength}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </fieldset>
  );
}

export default TextInput;
