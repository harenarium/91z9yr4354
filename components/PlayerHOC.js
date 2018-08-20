import React from "react";

const URL = "https://deckofcardsapi.com/api/deck/";

const playerHOC = (WrappedComponent) => {
  class HOC extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
      this.onInputChange = this.onInputChange.bind(this);
      this.submit = this.submit.bind(this);
    }

    clickHit = () => {
      fetch(URL + "/new/shuffle/?deck_count=1")
        .then(response => response.json())
        .then(json => this.setState(()=>json));
    };

    render() {
      return [
        <WrappedComponent {...this.props} clickHit={this.clickHit}/>
      ]

    }
  }

  return HOC;
};

export default playerHOC;
