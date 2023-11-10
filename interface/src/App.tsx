import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notice from "./pages/Notice";
import apiGetVotes from "./utils/apiGetVotes";

export const DataContext = createContext({
  votesData: [],
  selectedPlan: "string",
  plansData: [],
  selectedVote: "string",
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
