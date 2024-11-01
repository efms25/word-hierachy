import { CSSProperties, ReactNode } from "react";
import { Container } from "./styles";
export interface IButton {
  children: string | ReactNode;
  onClick?: (id?: string) => void;
  id?: string;
  type?: "button" | "submit" | "reset";
  color?: string;
  style?: CSSProperties;
}
function Button({ children, onClick, id, type = "button", color = "#00c853", style }: IButton) {
  const handleClickButton = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <Container style={style} type={type} color={color} onClick={handleClickButton}>
      {children}
    </Container>
  );
}

export default Button;
