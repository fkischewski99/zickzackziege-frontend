import React, { Component } from "react";
import Board from "./gameboard/board";

class Game extends Component {
  constructor(props) {
    super(props);
    const { numberOfPlayers } = this.props;

    let field = new Array(numberOfPlayers + 3);
    for (var i = 0; i < field.length; i++) {
      field[i] = new Array(numberOfPlayers + 3).fill(0);
    }
    this.state = {
      history: [],
      field: field,
      stepNumber: 0,
      xIsNext: true,
    };

    console.log(this.state.field);
  }

  handleClick(x, y) {}

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            numberOfPlayers={this.props.numberOfPlayers}
            field={this.state.field}
            onClick={(x, y) => this.handleClick(x, y)}
          />
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  return null;
}

export default Game;

// ========================================
