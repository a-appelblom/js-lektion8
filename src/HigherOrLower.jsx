import { useEffect, useState } from "react";

function convertCards(cardToConvert) {
  switch (cardToConvert.value) {
    case "JACK":
      return 11;
    case "QUEEN":
      return 12;
    case "KING":
      return 13;
    case "ACE":
      return 14;
    default:
      return parseInt(cardToConvert.value);
  }
}

const HigherOrLower = () => {
  const [deck, setDeck] = useState();
  const [card, setCard] = useState();
  const [prevCard, setPrevCard] = useState();
  const [isHigher, setIsHigher] = useState(null);
  useEffect(() => {
    async function getDeck() {
      const res = await fetch(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      const data = await res.json();
      setDeck(data);
    }
    getDeck();
  }, []);

  useEffect(() => {
    if (deck) {
      getCard();
    }
  }, [deck]);

  useEffect(() => {
    if (card && isHigher !== null) {
      if (
        (convertCards(card) > convertCards(prevCard) && isHigher) ||
        (convertCards(card) < convertCards(prevCard) && !isHigher)
      ) {
        alert("Right");
      } else {
        alert("Wrong");
      }
    }
  }, [card]);

  async function getCard() {
    const res = await fetch(
      `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
    );
    const data = await res.json();
    setCard(data.cards[0]);
  }
  function handleClick(higher) {
    setIsHigher(higher);
    setPrevCard(card);
    getCard();
  }

  return (
    <div>
      <h1>Higher or lower</h1>
      <div>{card && <img src={card.image} />}</div>
      <button onClick={() => handleClick(true)}>Higher</button>
      <button onClick={() => handleClick(false)}>Lower</button>
    </div>
  );
};

export default HigherOrLower;
