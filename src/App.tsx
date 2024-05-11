import React from "react";
import { HomePage } from "./pages/Home";
import { ControlX, Page } from "@etlyn/control-x";

function App() {
  return (
    <ControlX>
      <Page route="/" component={<HomePage />} />
    </ControlX>
  );
}

export default App;
