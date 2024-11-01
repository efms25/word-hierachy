import { ReactNode, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineTrash } from "react-icons/hi";

import {
  Container,
  TitleBox,
  ArrowButton,
  ChildrenContainer,
  ParentContaier,
  RemoveButton,
} from "./styles";

export interface ITreeNode {
  children?: ReactNode[];
  name: string;
  onRemove?: (id: string) => void;
  expanded?: boolean;
  id?: string;
}

function TreeNode({ children, name, onRemove, id }: ITreeNode): JSX.Element {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (onRemove && id) {
      onRemove(id);
    }
  };
  return (
    <Container>
      <ParentContaier>
        {children && children.length ? (
          <ArrowButton
            className={expanded ? "expanded" : ""}
            onClick={handleToggleExpand}
            type="button"
          >
            <IoIosArrowDown />
          </ArrowButton>
        ) : (
          <span className="arrow-button-space"></span>
        )}
        <TitleBox onClick={handleToggleExpand}>
          <div>
            <span>{name}</span>
          </div>
          <div>
            <RemoveButton onClick={(e) => handleRemove(e)}>
              <HiOutlineTrash />
            </RemoveButton>
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
