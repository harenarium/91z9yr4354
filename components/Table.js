import React from "react";
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
      .then(json => this.setState(()=>json))
      .then(()=>this.setState({
        player_hand: [],
        dealer_hand: []
      }));
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

  cardValue = (code) => {
    let value = 0
    switch (code[0]) {
      case "A":
        value = 1
        break;
      case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9":
        value = parseInt(code[0])
        break;
      case "0": case "J": case "Q": case "K":
        value = 10
        break;
    }
    return value
  }

  render() {
    return [
      <button onClick={this.clickStart}>{this.state.success?"New Deck":"Start Game"}</button>,
      <div>{this.state.success?
        <div>
          <button onClick={this.clickDraw}>{this.state.remaining > 0 ? "Deal Cards" : "no more cards"}</button>
          <br/>
          <br/>
          Player: <Player hand={this.state.player_hand} clickHit={this.clickHit} cardValue={this.cardValue}/>
          <br/>
          Dealer: <Dealer hand={this.state.dealer_hand} clickHit={this.clickHit} cardValue={this.cardValue}/>
        </div>
        :""}
      </div>,

    ]
  }
}

export default Table;
