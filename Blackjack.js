function generateCard() {
  const deck = [];
  const suits = ["Hearts", "Clubs", "Diamond", "Spades"];
  const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

  // Loop through the cards and suits
  for (const card of cards) {
    // Loop through the suits
    for (const suit of suits) {
      // Push the card and suit to the deck
      deck.push({ card, suit });
    }
  }

  return deck;
}

const myDeck = generateCard();

function drawCard(deck) {
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * deck.length);

  // Pick a randomIndex and store in variable and remove from deck
  const card = deck[randomIndex];
  deck.splice(randomIndex, 1);
  return card;
}

function checkScore(hand) {
  let total = 0;

  for (const cardObject of hand) {
    console.log(cardObject);
    //Check if it's jack, queen, king
    if (
      cardObject.card === "Jack" ||
      cardObject.card === "Queen" ||
      cardObject.card === "King"
    ) {
      total += 10;
      // Check if it's an ace
    } else if (cardObject.card === "Ace") {
      total += 1;
      // Check if it's a number
    } else {
      total += cardObject.card;
    }
  }

  return total;
}

// Draw a card
drawCard(myDeck);

// Push card to both player and dealer
const playerHand = [];
const dealerHand = [];

// Check Score

//Condition to check players
while (true) {
  //For the player to draw a card.
  playerHand.push(drawCard(myDeck));

  //Store the score in variable
  const playerScore = checkScore(playerHand);

  // Store the score in variable
  let dealerScore = checkScore(dealerHand);

  // Check if player is over 21
  if (playerScore > 21) {
    console.log(
      `You lose! Your Final Score was: ${playerScore} while the dealer had ${dealerScore}`
    );
    break;
  }

  //Check if player hit 21
  if (playerScore === 21) {
    console.log(
      `You win! Your Final Score was: ${playerScore} while the dealer had ${dealerScore}`
    );
    break;
  }

  //For the dealer to draw a card.
  dealerHand.push(drawCard(myDeck));

  //Store the score in variable
  dealerScore = checkScore(dealerHand);

  // Check if dealer is over 21
  if (dealerScore > 21) {
    console.log(
      `You lose! Your Final Score was: ${playerScore} while the dealer had ${dealerScore}`
    );
    break;
  }

  // Check if dealer hit 21
  if (dealerScore === 21) {
    console.log(
      `You win! Your Final Score was: ${playerScore} while the dealer had ${dealerScore}`
    );
    break;
  }
}

// Report the result in console
console.log("Ending Player Hand", playerHand);
console.log("Ending Player Score", checkScore(playerHand));
console.log("Ending Dealer Hand", dealerHand);
console.log("Ending Dealer Score", checkScore(dealerHand));
