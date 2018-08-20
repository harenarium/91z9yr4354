import React from "react";

const URL = "https://deckofcardsapi.com/api/deck/";

const playerHOC = (WrappedComponent) => {
  class HOC extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }

    

    render() {
      return [
        <WrappedComponent {...this.props} clickHit={this.clickHit}/>
      ]

    }
  }

  return HOC;
};

export default playerHOC;
