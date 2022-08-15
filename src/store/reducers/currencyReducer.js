import {ADD_FROM, ADD_TO} from '../actions/actionTypes'

const defaultState = {
  to: {},
  from: {}
}

export const currencyReducer = ( state = defaultState, action) => {
  switch (action.type) {
  case ADD_TO:
    return {...state, to: action.payload}
  case ADD_FROM:
    return {...state, from: action.payload}
  default:
    return state
  }
}
