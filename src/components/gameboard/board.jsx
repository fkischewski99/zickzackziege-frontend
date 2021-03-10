import React, { Component } from "react";

import Field from "./field";

class Board extends React.Component {
  numberOfRows = this.props.field.length;

  renderSquare(x, y) {
    console.log(this.props.field);
    console.log(this.props.field[x][y]);
    return (
      <Field
        value={this.props.field[x][y]}
        onClick={() => this.props.onClick(x, y)}
      />
    );
  }

  renderLine(row) {
    let elems = [];
    for (let column = 0; column < this.numberOfRows; column++) {
      elems.push(this.renderSquare(row, column));
    }
    return elems;
  }

  render() {
    let elems = [];

    for (let row = 0; row < this.numberOfRows; row++) {
      elems.push(<div className="board-row"> {this.renderLine(row)}</div>);
    }
    console.log(elems);
    return <div>{elems}</div>;
  }
}

export default Board;
