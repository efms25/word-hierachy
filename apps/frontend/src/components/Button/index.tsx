import React, { ReactNode } from "react";
export interface IButton {
  children: string | ReactNode;
  onClick?: (id?: string) => void;
  id?: string;
}
function Button({ children, onClick, id }: IButton) {
  const handleClickButton = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return <button onClick={handleClickButton}>{children}</button>;
}

export default Button;
