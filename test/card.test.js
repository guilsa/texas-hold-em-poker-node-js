const Card = require('../src/card')
const assert = require('assert')

it('card has rank', () => {
  const card = new Card('Queen', 'Hearts')
  assert.equal(card.rank, 'Queen')
})

it('card has suit', () => {
  const card = new Card('2', 'Clubs')
  assert.equal(card.suit, 'Clubs')
})

it('has string representation with name and suit', () => {
  const card = new Card('5', 'Diamonds')
  assert.equal(card.toString(), '5 of Diamonds')
})

it('card has four possible suit options', () => {
  const card = new Card('5', 'Diamonds')
  assert.deepEqual(card.SUITS, ['Hearts', 'Clubs', 'Spades', 'Diamonds'])
})

it('card has thirteen possible rank options', () => {
  const card = new Card('5', 'Diamonds')
  assert.deepEqual(card.RANKS, ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'])
})

it('card only allows for valid rank', () => {
  assert.throws(() => new Card('Two', 'Diamonds'), Error)
})

it('card only allows for valid suit', () => {
  assert.throws(() => new Card('2', 'Ducks'), Error)
})

it('can create standard 52 cards', () => {
  const cards = Card.createStandard52Cards()
  assert.equal(cards.length, 52)

  assert.deepEqual(cards[0], new Card('2', 'Hearts'))
  assert.deepEqual(cards.at(-1), new Card('Ace', 'Diamonds'))
})
