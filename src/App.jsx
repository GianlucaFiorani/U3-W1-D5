import "./App.css";
import { Component } from "react";
import TvShow from "./components/TvShow";

class App extends Component {
  state = {
    TvShow: true,
    Account: false,
  };
  render() {
    return (
      <>
        {this.state.TvShow && <TvShow />}
        {this.state.Account && <Account />}
      </>
    );
  }
}

export default App;
