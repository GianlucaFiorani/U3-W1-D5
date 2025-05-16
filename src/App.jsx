import "./App.css";
import { Component } from "react";
import TvShow from "./components/TvShow";
import Account from "./components/Account";

class App extends Component {
  state = {
    TvShow: false,
    Account: true,
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
