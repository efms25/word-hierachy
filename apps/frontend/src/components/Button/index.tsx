import { ReactNode } from "react";
import { Container } from "./styles";
export interface IButton {
  children: string | ReactNode;
  onClick?: (id?: string) => void;
  id?: string;
  type?: string;
  color?: string;
}
function Button({ children, onClick, id, type = "button", color = "#00c853" }: IButton) {
  const handleClickButton = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <Container type={type} color={color} onClick={handleClickButton}>
      {children}
    </Container>
  );
}

export default Button;
