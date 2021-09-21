import React from "react"; // kad koristimo classe importamo react library

export default class Greet extends React.Component {
  render() {
    const { greeting, name, children } = this.props;
    return (
      <div>
      <div>{greeting} {name}!
      </div>
      {children}
    </div>
    );
  } 
}