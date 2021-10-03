import PropTypes from "prop-types";

export default function CoinTossComponent({ isHeads, tossCoin }) { // button na click baca novčić
  return (
    <span>
      <button onClick={tossCoin}>Toss the coin</button>
      The result of coin toss is {isHeads && "heads"}{!isHeads && "tails"}.
    </span>
  );
}

CoinTossComponent.propTypes = {
  isHeads: PropTypes.bool,
  tossCoin: PropTypes.func,
};