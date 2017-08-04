import uuid from 'uuid'

export const cardCreate = (card) => ({
  type: 'CARD_CREATE',
  payload: {...card, id: uuid() },
})

export const cardUpdate = (card) =>({
  type: 'CARD_UPDATE',
  payload: {...card},
})

export const cardDelete = (card) =>({
  type: 'CARD_DELETE',
  payload: {...card},
})
