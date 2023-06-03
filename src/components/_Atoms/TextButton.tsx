import { ReactNode } from "react";

interface IProps {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
}

function TextButton({ text, onClick, disabled, children }: IProps) {
  return (
    <button
      className="text-button"
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {text}
    </button>
  );
}

export default TextButton;
