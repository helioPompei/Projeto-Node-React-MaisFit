import { ThemeProvider } from "styled-components";
import AppRoutes from "./routes/AppRoutes";
import { darkTheme } from "./styles/darkTheme";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
