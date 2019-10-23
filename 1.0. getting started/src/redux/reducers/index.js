import { FETCH_NEWS, RECEIVED_NEWS } from "../actions/index"

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_NEWS:
      return {...state, loading: true }
    case RECEIVED_NEWS:
      return {...state, loading: false, json: action.json}
    default: 
      return state
  }
}