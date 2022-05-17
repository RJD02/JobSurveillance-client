import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterMachine from "./RegisterMachine";

function Machine() {
  return (
    <Router>
      <Routes>
        <Route exact path="/registermachine" element={<RegisterMachine />} />
      </Routes>
    </Router>
  );
}

export default Machine;
