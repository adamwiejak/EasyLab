import { useRef } from "react";
import styled from "./styled";

interface BackgroundImageProps {
  src: string;
  alt?: string;
}

const Background: React.FC<BackgroundImageProps> = (props) => {
  const { src, alt } = props;
  const contianerRef = useRef<HTMLElement>(null!);

  // useEffect(() => {
  //   openTween(contianerRef);
  // }, []);

  return (
    <styled.Wrapper ref={contianerRef}>
      <img src={src} alt={alt || "backrgound image"} />
    </styled.Wrapper>
  );
};

export default Background;
