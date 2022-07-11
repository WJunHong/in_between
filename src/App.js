import logo from "./logo.svg";
import "./App.css";
import Body from "./Body";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [gameType, setGameType] = useState("Infinite");
  return (
    <div className="App">
      <Header setGameType={setGameType} />
      <Body gameType={gameType} />
    </div>
  );
}

export default App;
