import React from "react";

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      success: false
    };
  }

  render() {
    return [
      <button className="player_hand" onClick={this.props.clickHit}>Hit</button>,
      <div>{this.props.hand}</div>
    ]
  }
}

export default Player;
