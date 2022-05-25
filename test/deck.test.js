const Deck = require('../src/deck')
const assert = require('assert')
const Card = require('../src/card')

it('stores no cards at start', () => {
  const deck = new Deck()
  assert.deepEqual(deck.cards, [])
})

it('adds cards to its collection', () => {
  const card = new Card('Ace', 'Spades')
  const deck = new Deck()
  deck.addCards([card])

  assert.deepEqual(deck.cards, [card])
})

