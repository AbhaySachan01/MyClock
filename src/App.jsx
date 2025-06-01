// src/App.jsx
import React from "react";
import { Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import DigitalClock from "./Components/DigitalClock";
import StopWatch from "./Components/StopWatch";
import Timer from "./Components/Timer";
import About from "./Components/About";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/digitalclock" element={<DigitalClock />}></Route>
        <Route path="/stopwatch" element={<StopWatch />}></Route>
        <Route path="/timer" element={<Timer/>}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
