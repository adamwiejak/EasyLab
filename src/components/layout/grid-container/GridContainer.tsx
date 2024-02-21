import React from "react";
import styled, { StyledProps } from "./styled";

interface GridContainerProps extends StyledProps {
  children?: React.ReactNode;
}

const GridContainer = React.forwardRef<any, GridContainerProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    return (
      <styled.Container ref={ref} {...rest}>
        {children}
      </styled.Container>
    );
  }
);

export default GridContainer;
