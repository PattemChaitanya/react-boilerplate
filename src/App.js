import React from "react";
import Layout from "./component/Layout";

const App = () => {
  const headerTags = {
    title: "Home - React Boiler plate",
    keywords: "home",
    titleTemplate: "Home - React Boiler plate",
    description: "Home of this react boiler plate",
  };
  return <Layout headerTags={headerTags}>App</Layout>;
};

export default App;
