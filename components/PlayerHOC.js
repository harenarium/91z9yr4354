import React from "react";

const URL = "https://deckofcardsapi.com/api/deck/";
class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      success: false,
      deck_id: "",
      shuffled: false,
      remaining: 0
    };
  }

  clickHit = () => {
    fetch(URL + "/new/shuffle/?deck_count=1")
      .then(response => response.json())
      .then(json => this.setState(()=>json));
  };

export default Table;


const playerHOC = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return [
        <WrappedComponent {...this.props} clickHit={this.clickHit}/>
      ]

      );
    }
  }

  return HOC;
};

export default playerHOC;
