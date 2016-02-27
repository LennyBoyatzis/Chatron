import _ from 'lodash'
import deepFreeze from 'deep-freeze'

const initialState = {
  'id2123': {
    name: 'Molly Malone',
    time: '2:09 PM',
    preview: 'I was wondering...'
  },
  'id8910': {
    name: 'Nick Matenaar',
    time: '1:49 PM',
    preview: 'Youse home for dinner?'
  },
  'id4567': {
    name: 'Anna Simpson',
    time: '12:10 PM',
    preview: 'I am so cool'
  },
  'id0000': {
    name: 'Lenny Boyatzis',
    time: '8:30 AM',
    preview: 'Hey, how you doing?'
  }
}

deepFreeze(initialState)

export function users(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
