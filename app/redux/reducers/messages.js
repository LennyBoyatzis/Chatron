import _ from 'lodash'
import deepFreeze from 'deep-freeze'
import { RECEIVE_MESSAGE } from '../actions/actions'

const initialState = {
  '0': [
    { from: '2', msg: 'hi there'},
    { from: '0', msg: 'hi how are you doing'},
    { from: '3', msg: 'hi there'}
  ],
  '1': [
    { from: '1', msg: 'hi there'},
    { from: '0', msg: 'hi there'},
    { from: '1', msg: 'hi there'}
  ],
  '2': [
    { from: '0', msg: 'hi there'},
    { from: '2', msg: 'hi there'},
    { from: '3', msg: 'hi there'}
  ],
  '3': [
    { from: '1', msg: 'hi there'},
    { from: '2', msg: 'hi there'},
    { from: '3', msg: 'hi there'}
  ]
}

deepFreeze(initialState)

export function messages(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_MESSAGE:
    const { content } = action.msg
      return [...state, content]
    default:
      return state
  }
}
