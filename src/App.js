import React, { useState } from "react";
import Layout from "./component/Layout";
import {
  Button,
  CssBaseline,
  GlobalStyles,
  Grid,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import theme from "./config/theme";
import { globalStyles } from "./config/globalStyles";

const App = () => {
  const darkThemeMq = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(darkThemeMq ? true : false);
  const headerTags = {
    title: "Home - React Boiler plate",
    keywords: "home",
    titleTemplate: "Home - React Boiler plate",
    description: "Home of this react boiler plate",
  };

  return (
    <Layout headerTags={headerTags}>
      <GlobalStyles styles={globalStyles} />
      <ThemeProvider theme={theme(darkMode ? "dark" : "light")}>
        <CssBaseline />
        <Grid container direction="column" height="100vh" component="main">
          <Typography variant="h1">App</Typography>
          <Button onClick={() => setDarkMode(!darkMode)}>
            Change to {!darkMode ? "dark" : "light"} mode
          </Button>
        </Grid>
      </ThemeProvider>
    </Layout>
  );
};

export default App;
