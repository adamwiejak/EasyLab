import ScrollTop from "../../shared/scroll-top/ScrollTop";
import styled from "./styled";

interface GridContainerProps {
  children?: React.ReactNode;
}

const GridContainer: React.FC<GridContainerProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <styled.Container {...rest}>
      {children}
      <ScrollTop />
    </styled.Container>
  );
};

export default GridContainer;
