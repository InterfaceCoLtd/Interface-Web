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
  const [plansData, setPlansData] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [votesData, setVotesData] = useState([]);
  const [selectedVote, setSelectedVote] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      apiGetVotes().then(({ data }) => setVotesData(data.data));
      apiGetVotes().then(({ data }) => setPlansData(data)); //? 일정으로 바꾸기

      try {
        const plans = await apiGetVotes(); //일정으로 바꾸기
        setPlansData(plans);

        console.log("받아온 일정 데이터:", plans);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };
  });

  return (
    <div className="App">
      <DataContext.Provider
        value={{
          votesData,
          selectedPlan,
          plansData,
          selectedVote,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notice" element={<Notice />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </div>
  );
}

export default App;
