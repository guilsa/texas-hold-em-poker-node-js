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
