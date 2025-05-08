import {
  AppBar,
  Box,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeContext } from "../context/ThemeContext";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Header = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="subtitle1" component="h2">
          Anime Searh App
        </Typography>
        <Box>
          <IconButton onClick={toggleTheme}>
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
