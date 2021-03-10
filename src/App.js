import React, { Component } from "react";

import Game from "./components/game";
import Navbar from "./components/navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Navbar></Navbar>
        <Game numberOfPlayers={2} />
      </div>
    );
  }
}

export default App;
