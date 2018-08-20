import React from "react";
import PlayerHOC from "./PlayerHOC";
import Player from "./Player";
import Dealer from "./Dealer";

const PlayerHand = PlayerHOC(Player);
const DealerHand = PlayerHOC(Dealer);

const URL = "https://deckofcardsapi.com/api/deck/";
class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      success: false,
      deck_id: "",
      shuffled: false,
      remaining: 0,
      player_hand: [],
      dealer_hand: []
    };
  }

  clickStart = () => {
    fetch(URL + "/new/shuffle/?deck_count=6")
      .then(response => response.json())
      .then(json => this.setState(()=>json));
  };

  clickDraw = () => {
    fetch(URL + this.state.deck_id + "/draw/?count=2")
      .then(response => response.json())
      .then(json=>
        {if(json.success){
          this.setState({
            player_hand: [ ...this.state.player_hand, json.cards[0].code],
            dealer_hand: [ ...this.state.dealer_hand, json.cards[1].code]
          })
        }})
  };

  render() {
    return [
      <button onClick={this.clickStart}>{this.state.success?"New Deck":"Start Game"}</button>,
      <div>{this.state.success? <button onClick={this.clickDraw}>{this.state.remaining > 0 ?
        "Deal Cards":"no more cards"}</button>
        :""}
      </div>,
      <div>player: {this.state.player_hand.length}</div>,
      <div>dealer: {this.state.dealer_hand.length}</div>,
      <Player hand={this.state.player_hand}/>,
      <Dealer/>

    ]
  }
}

export default Table;
