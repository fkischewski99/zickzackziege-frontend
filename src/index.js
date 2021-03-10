import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Game from "./components/game";

ReactDOM.render(<Game numberOfPlayers={2} />, document.getElementById("root"));
