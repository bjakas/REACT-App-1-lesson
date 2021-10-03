import React from "react"; // kad koristimo classe u Reactu (class componente) nužno importamo, tj. definiramo react library; kod funkcijskih komponenata to nije bitno
import PropTypes from "prop-types";

export default class Greet extends React.Component {
  render() {
    const { greeting, name, children } = this.props;
    return (
      <div>
        <div>
          {greeting} {name}!
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


/* Kreirali smo funkciju u app.js-u pa smo ju gore prebacili i renerirali kod

function Greet({greeting, name, children}) {
  //console.log(`${greeting} ${name}!`);
  return (
    <div>
      <div>{greeting} {name}!
      </div>
      {children}
    </div>
    );
}
*/

// greet({greeting: "Aloha", name: "Domagoj"});