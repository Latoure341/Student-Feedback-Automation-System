import React, { useContext } from "react";
import Router from "./Router.jsx";
import { GlobalContainer } from "./styles/GlobalStyles.js";
import { ThemeContext } from "./context/ThemeContext.jsx";
import { ThemeProvider } from "styled-components";
import { mediaQuery } from "./styles/theme.js";

function App() {
  const { theme } = useContext(ThemeContext);
  const mode = theme === "light" ? mediaQuery : mediaQuery;

  return (
    <>
      <ThemeProvider theme={mode}>
        <GlobalContainer />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
