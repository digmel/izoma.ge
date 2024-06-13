import React from "react";
import { HomePage } from "./pages/Home";
import { ControlX, Page } from "@etlyn/control-x";
import BlogList from "./pages/Blog/BlogList";
import BlogPost from "./pages/Blog/BlogPost";

function App() {
  return (
    <ControlX>
      <Page route="/" component={<HomePage />} />
      <Page route={"/blogs"} component={<BlogList />} />
      <Page route="/blogs/:blogID" component={<BlogPost />} />
    </ControlX>
  );
}

export default App;
