import {ADD_TO, ADD_FROM} from './actionTypes'

export const addCurrencyTo = (payload) => ({type: ADD_TO, payload})
export const addCurrencyFrom = (payload) => ({type: ADD_FROM, payload})
