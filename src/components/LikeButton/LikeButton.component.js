import PropTypes from "prop-types";

export default function LikeButtonComponent({ incrementCount, count }) {
  return <button onClick={incrementCount}>Likes: {count}</button> // na klik povećaj broj
}

LikeButtonComponent.propTypes = {
  incrementCount: PropTypes.func,
  count: PropTypes.number,
};