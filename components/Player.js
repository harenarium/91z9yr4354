import React from "react";
import Card from "./Card";


class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      success: false,
    };
  }


  render() {
    return [
      <button className="player_hand" onClick={this.props.clickHit}>Hit</button>,
      <div>{this.props.hand.map((card, index)=>{return < Card key={card} card={card} position={[index, this.props.hand.length]}/> })}</div>,
      <div>player sum: {this.props.hand.reduce((acc, code)=>{return acc + this.props.cardValue(code)},0)}</div>
    ]
  }
}

export default Player;
