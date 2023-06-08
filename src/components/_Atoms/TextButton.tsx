import { ReactNode } from "react";

interface IProps {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  backgroundColor?: string;
  color?: string;
}

function TextButton({
  text,
  onClick,
  disabled,
  icon,
  backgroundColor = "#fff",
  color = "#333",
}: IProps) {
  return (
    <button
      className="text-button"
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{ backgroundColor, color }}
    >
      {icon}
      {text}
    </button>
  );
}

export default TextButton;
