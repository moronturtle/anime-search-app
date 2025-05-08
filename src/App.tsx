import AppRouter from "./router/AppRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "./context/ThemeContext";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";

const App = () => {
  const { currentTheme } = useThemeContext();

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
