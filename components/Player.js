import React from "react";

const URL = "https://deckofcardsapi.com/api/deck/";
class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      success: false,
      deck_id: "",
      shuffled: false,
      remaining: 0
    };
  }

  render() {
    return [
      <button onClick={this.props.clickHit}>Hit</button>,
      <div>{this.state.deck_id}</div>
    ]
  }
}

export default Player;
