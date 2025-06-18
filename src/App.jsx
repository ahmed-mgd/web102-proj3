import { useState } from 'react'
import Flashcard from "./components/Flashcard";
import './App.css'
import { flashcards } from "./data/flashcards";

function App() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  function showRandomCard() {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setIndex(randomIndex);
    setFlipped(false);
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
        <button onClick={showRandomCard}>&rarr;</button>
      </div>
      <div className="bottom-bar"></div>
    </div>
  )
}

export default App
