const Flashcard = ({ card, flipped, setFlipped }) => {

  return (
    <div className="card" onClick={() => setFlipped(!flipped)}>
      <div className={`card-inner ${flipped ? "flipped" : ""}`}>
        <div className="card-front">
          <p>{card.question}</p>
        </div>
        <div className="card-back">
          <p>{card.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
