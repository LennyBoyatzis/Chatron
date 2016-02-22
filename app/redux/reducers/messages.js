import _ from 'lodash'
import deepFreeze from 'deep-freeze'
import { RECEIVE_MESSAGE } from '../actions/actions'

const initialState = []

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
