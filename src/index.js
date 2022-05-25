const Card = require('./card')
const Deck = require('./deck')

const deck = new Deck()
const cards = Card.createStandard52Cards()
deck.addCards(cards)

