import { InputHTMLAttributes, ReactNode } from "react";

import "./styles.scss";

interface IInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode;
}

const InputText = ({ icon, ...props }: IInputTextProps) => {
  return (
    <div className="input-text-component">
      <input className="input-text-component__input" {...props} />
      <div className="input-text-component__icon-wrapper">{icon}</div>
    </div>
  );
};

export default InputText;
