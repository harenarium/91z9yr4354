import React from "react";
import Card from "./Card";
import './card.css';

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      position: [0,1]
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.position && this.props.position !== this.state.position) {
      this.setState({
        position: this.props.position
      });
    }
  }

  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  cornerMaker = (code) => {
    let number = code[0]
    let suit = ""
    if (code[0] === "0") {
      number = "10"
    }
    switch (code[1]) {
      case "S":
        suit = "\u2660"
        break;
      case "D":
        suit = "\u2666"
        break;
      case "C":
        suit = "\u2663"
        break;
      case "H":
        suit = "\u2665"
        break;
    }
    return number+suit
  }


  angleMaker = (position) => {
    console.log(position);
    let middle = position[1]/2 - 0.5
    let angle = "rotate(" + (position[0]- middle)*5 + "deg)"
    let leftPosition = "" + (middle - position[0])*position[1] + "%"
    let topPosition = "" + (position[0] - middle)*5 + "%"
    return {transform: angle, left: leftPosition, top: topPosition}
  }

  render() {
    return [
      <div onClick={this.clickHandler} className="cardOutline" style={this.angleMaker(this.state.position)}>
      {this.state.clicked ?
        <div>
          <div className="cornerTop">{this.cornerMaker(this.props.card)}</div>
          <div className="cardFront1">
            <div className="cardFront2">
              <div className="cardFront3">
              </div>
            </div>
          </div>
          <div className="cornerBottom">{this.cornerMaker(this.props.card)}</div>
        </div>
      :
        <div className="cardBack1">
          <div className="cardBack2">
            <div className="cardBack3">
            </div>
          </div>
        </div>
      }
      </div>

    ]
  }
}

export default Player;
