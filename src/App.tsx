import AppRouter from "./router/AppRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "./context/ThemeContext";
import { ToastProvider } from "./context/ToastContext";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";

const App = () => {
  const { currentTheme } = useThemeContext();

  return (
    <ThemeProvider theme={currentTheme}>
      <ToastProvider>
        <CssBaseline />
        <AppRouter />
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
