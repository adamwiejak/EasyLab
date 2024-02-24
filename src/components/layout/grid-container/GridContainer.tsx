import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled, { StyledProps } from "./styled";

interface IGridContainerProps extends StyledProps {
  children?: React.ReactNode;
}

const GridContainer: React.FC<IGridContainerProps> = (props) => {
  const { children, ...rest } = props;
  const containerRef = useRef<HTMLElement>(null!);

  useEffect(() => {
    const children = containerRef.current.children;
    gsap.set(children, { opacity: 0, scale: 0.95, yPercent: 3 });
    gsap.to(children, { opacity: 1, scale: 1, yPercent: 0, stagger: 0.075 });
  }, []);

  return (
    <styled.Container ref={containerRef} {...rest}>
      {children}
    </styled.Container>
  );
};

export default GridContainer;
