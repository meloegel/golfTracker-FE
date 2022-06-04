import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddRound from "./AddRound";
import "./App.css";
import Dashboard from "./Dashboard";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add_round" element={<AddRound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
