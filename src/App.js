import React from "react";
import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { theme } from "./theme";

import { store } from "./redux/store";
import { AppRouter } from "./routers/AppRouter.js";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
