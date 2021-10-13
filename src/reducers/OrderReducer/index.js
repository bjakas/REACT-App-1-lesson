const initialState = {
  items: [],
  jokeResponse: null,
  jokeError: null,
};

const type = {
  ADD_ORDER_ITEM: "ADD_ORDER_ITEM",
  FETCH_JOKE_SUCCESS: "FETCH_JOKE_SUCCESS",
  FETCH_JOKE_FAILURE: "FETCH_JOKE_FAILURE"
};

export function addOrderItem(item) {
  return { type: type.ADD_ORDER_ITEM, item };
}

export function setJokeResponse(response) {
  return { type: type.FETCH_JOKE_SUCCESS, response };
}

export function setJokeError(error) {
  return { type: type.FETCH_JOKE_FAILURE, error };
}

export function sendJokeRequest() {
  return function fetchJoke(dispatch) {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(json => dispatch(setJokeResponse(json)))
      .catch(error => dispatch(setJokeError(error)));
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case type.ADD_ORDER_ITEM:
      return { ...state, items: [...state.items, action.item] };
    case type.FETCH_JOKE_FAILURE:
      return { ...state, jokeError: action.error };
    case type.FETCH_JOKE_SUCCESS:
      return { ...state, jokeResponse: action.response };
    default:
      return state;
  }
}