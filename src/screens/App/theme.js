import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#003" },
    secondary: { main: "#F1F8E9" }
  },
  typography: {},
  overrides: {
    MuiButton: {}
  }
});

export default theme;
