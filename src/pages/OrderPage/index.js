import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import reducer, { addOrderItem } from "../../reducers/OrderReducer";

const orderStore = createStore(reducer);

function OrderForm() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(addOrderItem({ text: "Hrana" }));
  } // preko dispatcha pošaljemo u reducer

  console.log(state);

  return (
    <form onSubmit={handleOnSubmit}>
      <input value="hrana" /> <button>Add order</button>
    </form>
  );
}

export default function OrderPage() {
  return (
    <Provider store={orderStore}>
      <div className="OrderPage">
        <h1>Order food</h1>
        <OrderForm />
      </div>
    </Provider>
  )
}