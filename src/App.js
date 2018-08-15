import React, { Component } from "react";
import { NavBar } from "./components/navbar";
import Search from "./components/search";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Search />
      </div>
    );
  }
}

export default App;
