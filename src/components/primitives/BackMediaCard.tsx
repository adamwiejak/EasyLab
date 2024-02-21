import React from "react";
import MediaCard, { IMediaCard } from "../shared/media-card/MediaCard";
import { getImage } from "../../assets/images/_images";
import { Link } from "react-router-dom";

interface IBackMediaCard
  extends Omit<IMediaCard, "header" | "imageSrc" | "alt" | "href"> {}

const BackMediaCard: React.FC<IBackMediaCard> = (props) => {
  const { ...rest } = props;

  return (
    <Link to="../" relative="path">
      <MediaCard {...rest} header="Wstecz" imageSrc={getImage("back")} />;
    </Link>
  );
};

export default BackMediaCard;
