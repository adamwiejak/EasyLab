import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface ImageButton {
  height?: number | string;
  imageSrc: string;
  text: string;
  header: string;
  alt?: string;
}

const ImageButton: React.FC<ImageButton> = (props) => {
  const { imageSrc, alt, header, text, height, ...rest } = props;

  return (
    <Card
      sx={{
        filter: "brightness(0.65)",
        transition: "all 0.15s ease-in-out",
        "&:hover": {
          filter: "brightness(1)",
        },
      }}
      {...rest}
    >
      <CardActionArea sx={{ height: "100%" }}>
        <CardMedia
          height={height}
          component="img"
          image={imageSrc}
          alt={alt || "image"}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {header}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ImageButton;
