import { useEffect, useState } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import reducer, { addOrderItem, sendJokeRequest } from '../../reducers/OrderReducer';

const orderStore = createStore(reducer, applyMiddleware(thunk));

function OrderForm() {
  const [state, setState] = useState({ text: '' });
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    setState({ text: event.target.value });
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(addOrderItem(state)); // text: "Hrana" 
  } // preko dispatcha pošaljemo u reducer
  return (
    <form onSubmit={handleOnSubmit}>
      <input value={state.text} onChange={handleOnChange} />
      <button>Add order</button>
    </form>
  );
}

function OrderList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.items);
  const joke = useSelector((state) => ({
    response: state.jokeResponse,
    error: state.jokeError
  }));

  useEffect(() => {
    dispatch(sendJokeRequest());
  }, [dispatch]);

  return (
    <div>
      {joke.response !== null && <div>{joke.response.value}</div>}
      {state.map((item, index) =>
        <div key={index}>{item.text}</div>
      )}
    </div>
  )
}

export default function OrderPage() {
  return (
    <Provider store={orderStore}>
      <div className="OrderPage">
        <h1>Order food</h1>
        <OrderList />
        <OrderForm />
      </div>
    </Provider>
  )
}