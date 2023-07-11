import React from "react";
import { Provider } from "react-redux";
import { store, history } from "./redux/store";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import IntroPage from "./pages/Intro/IntroPage";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path={"/"} element={<IntroPage />} />
          <Route path={"/demo"} element={<HomePage />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
