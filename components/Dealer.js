import React from "react";

class Dealer extends React.Component {
  constructor() {
    super();
    this.state = {
      success: false
    };
  }

  render() {
    return [
      <button className="dealer_hand" onClick={this.props.clickHit}>Hit</button>,
      <div>{this.props.hand}</div>
    ]
  }
}

export default Dealer;
