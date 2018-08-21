import React from "react";
import PlayerHOC from "./PlayerHOC";
import Player from "./Player";
import Dealer from "./Dealer";
//
// const PlayerHand = PlayerHOC(Player);
// const DealerHand = PlayerHOC(Dealer);

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

  clickHit = (e) => {
    const whosHand = e.target.className
    console.log(e.target.className);
    fetch(URL + this.state.deck_id + "/draw/?count=1")
      .then(response => response.json())
      .then(json=>
        {if(json.success){
          this.setState({
            [whosHand]: [ ...this.state[whosHand], json.cards[0].code]
          })
        }});
  };

  render() {
    return [
      <button onClick={this.clickStart}>{this.state.success?"New Deck":"Start Game"}</button>,
      <div>{this.state.success? <button onClick={this.clickDraw}>{this.state.remaining > 0 ?
        "Deal Cards":"no more cards"}</button>
        :""}
      </div>,
      <Player hand={this.state.player_hand} clickHit={this.clickHit} />,
      <Dealer hand={this.state.dealer_hand} clickHit={this.clickHit} />

    ]
  }
}

export default Table;
