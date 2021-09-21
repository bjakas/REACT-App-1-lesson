import { getCurrentDate } from "../helpers"; // izađemo iz components mape i uđemo u src mapu i tražimo mapu helpers

export default function CurrentDate() {
  return <p>Today is {getCurrentDate()}</p>;
}