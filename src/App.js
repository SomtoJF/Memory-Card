import "./App.sass";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="App">
      <Nav score={score} highScore={highScore} />
      <Main />
    </div>
  );
}

export default App;
