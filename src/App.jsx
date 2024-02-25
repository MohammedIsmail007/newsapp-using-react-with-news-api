import { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import News from "./News";
import Header from "./Header";
import Footer from "./Footer";
//1ef89c563c36445397705dd35c5676ea
function App() {
  return (
    <>
      <Header />

      <News />
      <Footer />
    </>
  );
}

export default App;
