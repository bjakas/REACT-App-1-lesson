import { getId } from "../helpers";

export default function UniqueId() {
  return <p>Your unique ID is: {getId()}</p>;
}