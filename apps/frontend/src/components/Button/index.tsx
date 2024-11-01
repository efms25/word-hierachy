import { ReactNode } from "react";
import { Container } from "./styles";
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

  return <Container onClick={handleClickButton}>{children}</Container>;
}

export default Button;
