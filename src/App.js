import "./App.sass";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const incrementScore = () => {
		setScore(score + 1);
	};

	const incrementHighScore = () => {
		if(score >= highScore){
      setHighScore(highScore + 1)
    }
	};

	const clearScore = () => {
		setScore(0);
	};

  return (
		<div className="App">
			<Nav score={score} highScore={highScore} />
			<Main
				incrementHighScore={incrementHighScore}
				incrementScore={incrementScore}
        clearScore={clearScore}
			/>
		</div>
	);
}

export default App;
