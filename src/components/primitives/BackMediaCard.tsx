import React from "react";
import { Link } from "react-router-dom";
import { back } from "../../assets/images/_images";
import MediaCard, { IMediaCard } from "../shared/media-card/MediaCard";

interface IBackMediaCard
  extends Omit<IMediaCard, "header" | "imageSrc" | "alt"> {}

const BackMediaCard: React.FC<IBackMediaCard> = (props) => {
  return (
    <Link to="../">
      <MediaCard
        imageSrc={back}
        header="Wstecz"
        alt="Back Button Image"
        {...props}
      />
    </Link>
  );
};

export default BackMediaCard;
