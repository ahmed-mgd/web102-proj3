import { useState } from 'react'
import Flashcard from "./components/Flashcard";
import './App.css'
import { flashcards } from "./data/flashcards";

function App() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(0);

  function resetState() {
    setFlipped(false);
    setAnswer("");
    setFeedback(0);
  }

  function handleNext() {
    if (index < flashcards.length - 1) {
      setIndex(index + 1);
      resetState();
    }
  }

  function handlePrevious() {
    if (index > 0) {
      setIndex(index - 1);
      resetState();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (answer.trim().toLowerCase() === flashcards[index].answer.toLowerCase()) {
      setFeedback(1);
      setFlipped(true);
    } else {
      setFeedback(-1);
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
            placeholder="Place your answer here..."
            className={feedback === 1 ? "input-correct" : feedback === -1 ? "input-incorrect" : ""}
          />
          <button type="submit">Submit</button>
        </form>
        <div className="nav-buttons">
          <button onClick={handlePrevious} disabled={index === 0}>
            &larr;
          </button>
          <button onClick={handleNext} disabled={index === flashcards.length - 1}>
            &rarr;
          </button>
        </div>
      </div>
      <div className="bottom-bar"></div>
    </div>
  )
}

export default App
