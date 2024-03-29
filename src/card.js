const util = require('node:util')

const SUITS = ['Hearts', 'Clubs', 'Spades', 'Diamonds']
const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']

class Card {
  static createStandard52Cards() {
    const cards = []
    for (const suit of SUITS) {
      for (const rank of RANKS) {
        cards.push(new Card(rank, suit))
      }
    }

    return cards
  }

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

  [util.inspect.custom]() {
    return `${this.toString()}`
  }
}

module.exports = Card
