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

  clickDraw = () => {
    fetch(URL + "/new/shuffle/?deck_count=1")
      .then(response => response.json())
      .then(json => this.setState(()=>json));
  };

  render() {
    return [
      <button onClick={this.clickDraw}>Draw</button>,
      <div>{this.state.deck_id}</div>
    ]
  }
}

export default Table;
