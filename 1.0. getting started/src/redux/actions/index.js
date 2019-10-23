export const FETCH_NEWS = "FETCH_NEWS"
export const RECEIVED_NEWS = "RECEIVED_NEWS"

export function fetchNews() {
  return {
    type: FETCH_NEWS
  }  
}