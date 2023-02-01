import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [images, setImages] = useState([]);

  // activeImages is an array of length 6
  const [activeImages, setActiveImages] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  );
}

export default App;
