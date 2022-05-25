class Deck {
  constructor() {
    this.cards = []
  }

  addCards(cards) {
    this.cards = this.cards.concat(cards)
  }

  toString() {}
}

module.exports = Deck
