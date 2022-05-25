const SUITS = ['Hearts', 'Clubs', 'Spades', 'Diamonds']
const RANKS = ['2', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']

class Card {
  constructor(rank, suit) {
    if (!RANKS.includes(rank)) throw new Error(`Invalid rank. Rank must be one of the following ${RANKS}`)

    if (!SUITS.includes(suit)) throw new Error(`Invalid suit. Suit must be one of the following ${SUITS}`)
    this.rank = rank
    this.suit = suit
    this.SUITS = SUITS
    this.RANKS = RANKS
  }

  toString() {
    return `${this.rank} of ${this.suit}`
  }
}

module.exports = Card
