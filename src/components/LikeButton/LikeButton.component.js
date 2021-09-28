import PropTypes from "prop-types";

export default function LikeButtonComponent({ incrementCount, count }) { // definiramo propse koje povlačimo; state kao props povlačimo u prezentacijsku komponentu
  return <button onClick={incrementCount}>Likes: {count}</button> // na klik povećaj broj
}

LikeButtonComponent.propTypes = {
  incrementCount: PropTypes.func,
  count: PropTypes.number,
};