import { getCurrentDate } from "../helpers";

export default function CurrentDate() {
  return <p>Today is {getCurrentDate()}</p>;
}