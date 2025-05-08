import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getTheme, type Mode } from "../theme";
import { type ThemeProviderProps } from "@mui/material";

type ThemeContextType = {
  mode: Mode;
  currentTheme: ThemeProviderProps["theme"];
  toogleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState<Mode>(
    (localStorage.getItem("theme") as Mode) || "light"
  );

  const toogleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const currentTheme = useMemo(() => {
    return getTheme(mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toogleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeContext must be used inside ThemeContextProvider");
  return context;
};
