import { ReactNode } from "react";
import { IoIosArrowDown } from "react-icons/io";

import {
  Container,
  TitleBox,
  ArrowButton,
  ChildrenContainer,
  ParentContaier,
} from "./styles";

export interface ITreeNode {
  children?: ReactNode[];
  name: string;
  onClick?: () => void;
  expanded?: boolean;
}

function TreeNode({
  children,
  name,
  onClick,
  expanded = false,
}: ITreeNode): JSX.Element {
  return (
    <Container>
      <ParentContaier>
        {children && children.length ? (
          <ArrowButton
            className={expanded ? "expanded" : ""}
            onClick={onClick}
            type="button"
          >
            <IoIosArrowDown />
          </ArrowButton>
        ) : (
          <span className="arrow-button-space"></span>
        )}
        <TitleBox onClick={onClick}>
          <div>
            <span>{name}</span>
          </div>
        </TitleBox>
      </ParentContaier>
      <ChildrenContainer expanded={expanded}>
        {children && <span className="marker-line" />}
        <div>{children}</div>
      </ChildrenContainer>
    </Container>
  );
}

export default TreeNode;
