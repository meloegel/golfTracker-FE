import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Hello World</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
