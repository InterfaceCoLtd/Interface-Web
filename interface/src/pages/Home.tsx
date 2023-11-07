import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import Header from "../components/Header";
import MovingCircles from "../components/MovingCircles";
import FloatingCircles from "../components/MovingCircles";

function Home() {
  return (
    <div className="Home">
      <Header />
      <FloatingCircles />

    </div>
  );
}

export default Home;
