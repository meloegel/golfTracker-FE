import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddRound from "./round/AddRound";
import "./App.css";
import Dashboard from "./Dashboard";
import Login from "./account/Login";
import Register from "./account/Register";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add_round" element={<AddRound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
