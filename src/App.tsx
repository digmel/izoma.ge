import React from "react";
import { Provider } from "react-redux";
import { store, history } from "./redux/store";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import IntroPage from "./pages/Intro/IntroPage";

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;

{/* <HashRouter>
<Routes>
  <Route path={"/"} element={<HomePage />} />
  <Route path={"/intro"} element={<IntroPage />} />
</Routes>
</HashRouter> */}