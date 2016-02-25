import _ from 'lodash'
import deepFreeze from 'deep-freeze'
import { RECEIVE_MESSAGE, ADD_USER, REMOVE_USER } from '../actions/actions'

const initialState = {
  '3': {
    name: 'Molly Malone',
    time: '2:09 PM',
    preview: 'I was wondering...'
  },
  '2': {
    name: 'Nick Matenaar',
    time: '1:49 PM',
    preview: 'Youse home for dinner?'
  },
  '1': {
    name: 'Anna Simpson',
    time: '12:10 PM',
    preview: 'I am so cool'
  },
  '0': {
    name: 'Lenny Boyatzis',
    time: '8:30 AM',
    preview: 'Hey, how you doing?'
  }
}

deepFreeze(initialState)

export function users(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return state
    case REMOVE_USER:
      return state
    default:
      return state
  }
}
