import React from "react";
import { EntityTogglesWrapper } from "../ExplorerStyledComponents";
import styled from "styled-components";
import { Colors } from "constants/Colors";

const Wrapper = styled(EntityTogglesWrapper)`
  &&& {
    border: 1px solid ${Colors.SLATE_GRAY};
    &:hover {
      border-color: ${Colors.WHITE};
    }
    & > span {
      line-height: 17.5px;
    }
  }
`;
export const EntityAddButton = (props: { onClick?: () => void }) => {
  const handleClick = (e: any) => {
    props.onClick && props.onClick();
    e.stopPropagation();
  };
  if (!props.onClick) return null;
  else {
    return (
      <Wrapper onClick={handleClick}>
        <span>+</span>
      </Wrapper>
    );
  }
};

export default EntityAddButton;