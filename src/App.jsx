import React from "react";
import Hero from "./components/Hero";
import Stats from "./components/stats";
import "./App.css";

export { Hero, Stats };

export default function App() {
  return (
    <div className="vsrp-app">
      <Hero />
      <Stats />
    </div>
  );
}