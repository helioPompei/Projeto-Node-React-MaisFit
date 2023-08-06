import { ThemeProvider } from "styled-components";
import AppRoutes from "./routes/AppRoutes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme } from "./styles/DefaultTheme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
