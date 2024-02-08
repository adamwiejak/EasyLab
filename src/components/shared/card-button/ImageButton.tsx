import * as styled from "./styled";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardProps } from "@mui/material";

export interface IImageButton extends CardProps {
  height?: number | string;
  imageSrc: string;
  text: string;
  header: string;
  alt?: string;
}

const ImageButton: React.FC<IImageButton> = (props) => {
  const { imageSrc, alt, header, text, height, ...rest } = props;

  return (
    <styled.Card {...rest}>
      <styled.CardActionArea>
        <CardMedia
          component="img"
          height={height}
          image={imageSrc}
          draggable={false}
          alt={alt || "image"}
        />

        <styled.CardContent>
          <Typography gutterBottom variant="h5">
            {header}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </styled.CardContent>
      </styled.CardActionArea>
    </styled.Card>
  );
};

export default ImageButton;
