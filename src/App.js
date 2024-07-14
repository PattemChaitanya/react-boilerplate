import React, { useState } from "react";
import Layout from "./component/Layout";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const headerTags = {
    title: "Home - React Boiler plate",
    keywords: "home",
    titleTemplate: "Home - React Boiler plate",
    description: "Home of this react boiler plate",
  };

  return (
    <Layout headerTags={headerTags}>
      <div className="container">
        <h1>App</h1>
        <button
          onClick={() => {
            setDarkMode(!darkMode);
            if (darkMode) {
              document.body.setAttribute("data-theme", "dark");
            } else {
              document.body.removeAttribute("data-theme");
            }
          }}
        >
          Change to {darkMode ? "light" : "dark"} mode
        </button>
      </div>
    </Layout>
  );
};

export default App;
