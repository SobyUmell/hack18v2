import { Provider } from "react-redux";
import { store } from "../../shared/stores";
import "../styles/global.scss";
import { AppRouter } from "../../widgets";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../styles/tags.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <AppRouter />
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default App;
