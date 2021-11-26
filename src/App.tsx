import { Root } from "./components/Root";
import { Routes } from "./router/Router";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Root>
        <Routes />
      </Root>
      <GlobalStyle />
    </>
  );
}

export default App;
