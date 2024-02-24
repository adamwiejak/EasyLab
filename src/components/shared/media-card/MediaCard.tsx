import * as styled from "./styled";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import type { CardProps } from "@mui/material";

export interface IMediaCard extends CardProps {
  title?: string;
  alt?: string;
  header: string;
  imageSrc: string;
  height?: number | string;
}

const MediaCard: React.FC<IMediaCard> = (props) => {
  const { imageSrc, alt, header, title, height, ...rest } = props;

  return (
    <styled.Container {...rest}>
      <styled.ActionArea>
        <CardMedia
          component="img"
          height={height || 250}
          image={imageSrc}
          draggable={false}
          alt={alt || "image"}
        />

        <styled.CardContent>
          <Typography variant="h5">{header}</Typography>

          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </styled.CardContent>
      </styled.ActionArea>
    </styled.Container>
  );
};

export default MediaCard;
