import React from "react";
import "./App.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "./components/Navbar/navbar";
import TourList from "./components/TourList/tourList";

function App() {
  return (
    <>
      <Navbar />
      <TourList />
    </>
  );
}

export default App;
