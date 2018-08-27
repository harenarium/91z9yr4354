import React from "react";
import Card from "./Card";


class Dealer extends React.Component {
  constructor() {
    super();
    this.state = {
      success: false,
    };
  }


  render() {
    return [
      <button className="dealer_hand" onClick={this.props.clickHit}>Hit</button>,
      <div>{this.props.hand.map((card, index)=>{return < Card key={card} card={card} position={[index, this.props.hand.length]}/> })}</div>,
      <div>dealer sum: {this.props.hand.reduce((acc, code)=>{return acc + this.props.cardValue(code)},0)}</div>
    ]
  }
}

export default Dealer;
