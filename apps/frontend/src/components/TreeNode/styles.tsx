import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const ParentContaier = styled.div`
  display: flex;
  padding: 3px;
  cursor: pointer;
  .arrow-button-space {
    width: 22.4px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  gap: 4px;
  padding-left: 2px;
  align-items: center;
  color: #000;
  width: 100%;
  > div {
    display: flex;
    gap: 10px;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  transform: rotate(-90deg);
  transition: transform 0.2s ease;
  &.expanded {
    transform: rotate(0deg);
  }
`;

const ChildrenContainer = styled.div<{ expanded: boolean }>`
  display: ${({ expanded }: { expanded: boolean }) =>
    expanded ? "flex" : "none"};
  overflow: hidden;
  span.marker-line {
    border-right: solid 1px rgba(32, 32, 32, 0.4);
    width: 1px;
    height: auto;
    margin: 0 10px 0 12px;
    flex: 0 1 auto;
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  color: tomato;
`;
export {
  Container,
  TitleBox,
  ArrowButton,
  ChildrenContainer,
  ParentContaier,
  RemoveButton,
};
