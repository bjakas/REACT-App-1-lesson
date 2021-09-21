import React from "react"; // kad koristimo classe importamo react library
import PropTypes from "prop-types";

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

Greet.propTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.any,
};