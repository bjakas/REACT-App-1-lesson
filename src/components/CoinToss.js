import React from "react";

export default class CoinToss extends React.Component {
  /* kroz konstruktor
  constructor() {
    super(); // nadkonstruktor
    this.state = {
      isHeads: Math.random() > 0.5,
    }
  }
  */
 
  // ILI KROZ STATE
  state = {
    isHeads: Math.random() > 0.5,
  }

  tossCoin = () => {
    this.setState({ isHeads: Math.random() > 0.5} );
  };

  render() {
    const { isHeads } = this.state;

    return (
      <p>
        <button onClick={this.tossCoin}>Toss the coin</button>
        The result of coin toss is {isHeads && "heads"}{!isHeads && "tails"}.
        </p>
    );
  }
}


