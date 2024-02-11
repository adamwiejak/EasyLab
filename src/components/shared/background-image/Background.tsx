import React from "react";
import styled from "./styled";

interface BackgroundImageProps {
  src: string;
  alt?: string;
}

const Background: React.FC<BackgroundImageProps> = (props) => {
  const { src, alt } = props;

  return (
    <styled.Wrapper>
      <img src={src} alt={alt || "backrgound image"} />
    </styled.Wrapper>
  );
};

export default Background;
