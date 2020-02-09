/**
 * Reducer
 */
import { CLEAR_STORE, TEST_REDUCER } from './constants'

export const initialState = {
  testValue: 'Click me!!!',
}

const reducer = (state, action) => {
  switch (action.type) {
  case CLEAR_STORE:
    return initialState
  case TEST_REDUCER:
    return { ...state, testValue: action.testValue }
  default:
    throw new Error(`Unhandle type action: ${action.type}`)
  }
}

export default reducer
