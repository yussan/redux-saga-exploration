import { FETCH_NEWS, fetchNews } from "../actions/index"

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_NEWS:
      return state  
    // return {...state, {loading: true}}
    default: 
      return state
  }
}