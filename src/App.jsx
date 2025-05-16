import "./App.css";
import { Component } from "react";
import TvShow from "./components/TvShow";
import Account from "./components/Account";
import Settings from "./components/Settings";

class App extends Component {
  state = {
    TvShow: false,
    Account: false,
    Settings: true,
  };
  render() {
    return (
      <>
        {this.state.TvShow && <TvShow />}
        {this.state.Account && <Account />}
        {this.state.Settings && <Settings />}
      </>
    );
  }
}

export default App;
