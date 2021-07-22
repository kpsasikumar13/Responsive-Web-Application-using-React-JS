import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import "./styles.css";

const App = () => {
  return (
    <div className="components">
      <Navbar />
      <Content />
    </div>
  );
};

export default App;
