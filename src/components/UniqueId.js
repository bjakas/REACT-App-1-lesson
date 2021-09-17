import { getId } from "../helpers";

export default function UniqueId() {
  return <p>Your unique id is: {getId()}</p>;
}