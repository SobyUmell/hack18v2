import { Provider } from "react-redux";
import { store } from "../../shared/stores";
import "../styles/global.scss";
import { AppRouter } from "../../widgets";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
