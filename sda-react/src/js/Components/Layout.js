import React, { Component } from "react";
import Movies from "./movies/Movies";
import Characters from "./characters/Character";

class Layout extends Component {
  state = {};
  render() {
    return (
      <div>
        <Movies />
        <Characters />
      </div>
    );
  }
}

export default Layout;
