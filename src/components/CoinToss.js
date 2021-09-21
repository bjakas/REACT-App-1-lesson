import React from "react";

export default class CoinToss extends React.Component {
  render() {
    const isHeads = Math.random() > 0.5;
    return (
      <span>The result of coin toss is {isHeads && "heads"}{!isHeads && "tails"}.</span>
    );
  }
}