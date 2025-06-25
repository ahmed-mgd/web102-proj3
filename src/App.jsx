import { useState } from 'react'
import Flashcard from "./components/Flashcard";
import './App.css'
import { flashcards } from "./data/flashcards";

function App() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [answer, setAnswer] = useState("");

  function showRandomCard() {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setIndex(randomIndex);
    setFlipped(false);
    setAnswer("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (answer.trim().toLowerCase() === flashcards[index].answer.toLowerCase()) {
      alert("Correct!");
      setFlipped(true);
      setAnswer("");
    } else {
      alert("Incorrect, try again!");
      setFlipped(false);
    }
  }

  return (
    <div className="app">
      <div className="top-bar"></div>
      <div className="main-content">
        <h1>Common French Words</h1>
        <p>Pick up some basic words to use on your next trip to a francophone country!</p>
        <p>Number of cards: {flashcards.length}</p>
        <div className="card-container">
          <Flashcard card={flashcards[index]} flipped={flipped} setFlipped={setFlipped} />
        </div>
        <form className="guess" onSubmit={handleSubmit}>
          <p>Guess the answer here:</p>
          <input
            type="text"
            value={answer}
            onChange={event => setAnswer(event.target.value)}
            placeholder="Type your answer here..."
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={showRandomCard}>&rarr;</button>
      </div>
      <div className="bottom-bar"></div>
    </div>
  )
}

export default App
