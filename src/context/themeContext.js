import React from "react";

export const theme = {
   dark: {
      color: "#fff",
      backgroundColor: "#000",
   },
   light: {
      color: "#000",
      backgroundColor: "#fff",
   },
};

export const ThemeContext = React.createContext({
   theme: theme.light,
   changeTheme: () => { },
});

ThemeContext.displayName = "ThemeContext";
