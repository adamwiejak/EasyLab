import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Dialog from "@mui/material/Dialog";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import IconButton from "../../primitives/IconButton";
import useBoolean from "../../../hooks/useBoolean";
import { useState } from "react";
import { Link } from "react-router-dom";

const CurrentNotebook = () => {
  const [open, toggleOpen] = useBoolean(false);

  const [value, setValue] = useState(0);

  const handleChange = () => (newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tooltip title="Wstecz">
        <Link to="/.." relative="path">
          <IconButton color="inherit" iconName="arrowBack" />
        </Link>
      </Tooltip>

      <Tooltip title="Otwórz Arkusze">
        <span>
          <IconButton
            color="inherit"
            onClick={toggleOpen}
            iconName="nootebook"
          />
        </span>
      </Tooltip>

      <Tooltip title="Otwórz Kalkulator">
        <span>
          <IconButton color="inherit" iconName="calculate" />
        </span>
      </Tooltip>

      <Dialog fullWidth onClose={toggleOpen} open={open}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Aktualny Arkusz" />
            <Tab label="Nowy Arkusz" />
            <Tab label="Wszystkie Arkusze" />
          </Tabs>
        </Box>

        <Card
          sx={{
            display: "grid",
            p: 5,
            placeItems: "center",
            minHeight: "30vh",
          }}
        >
          <Typography>Content</Typography>
        </Card>
      </Dialog>
    </>
  );
};

export default CurrentNotebook;
