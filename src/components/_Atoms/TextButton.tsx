import { ReactNode } from "react";

interface IProps {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
  backgroundColor?: string;
  color?: string;
}

function TextButton({
  text,
  onClick,
  disabled,
  children,
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
      {children}
      {text}
    </button>
  );
}

export default TextButton;
