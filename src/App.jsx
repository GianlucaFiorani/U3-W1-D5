import "./App.css";
import { Component } from "react";
import TvShow from "./components/TvShow";
import Account from "./components/Account";
import Settings from "./components/Settings";

class App extends Component {
  state = {
    tvShow: true,
    account: false,
    settings: false,
  };
  tvShowSelect = () => {
    this.setState({ tvShow: true });
    this.setState({ account: false });
    this.setState({ settings: false });
  };
  accountSelect = () => {
    this.setState({ tvShow: false });
    this.setState({ account: true });
    this.setState({ settings: false });
  };
  settingSelect = () => {
    this.setState({ tvShow: false });
    this.setState({ account: false });
    this.setState({ settings: true });
  };
  render() {
    return (
      <>
        {this.state.tvShow && (
          <TvShow accountLink={this.accountSelect} settingsLink={this.settingSelect} tvShowLink={this.tvShowSelect} setting={this.state.settings} />
        )}
        {this.state.account && <Account tvShowLink={this.tvShowSelect} />}
        {this.state.settings && (
          <Settings accountLink={this.accountSelect} settingsLink={this.settingSelect} tvShowLink={this.tvShowSelect} setting={this.state.settings} />
        )}
      </>
    );
  }
}

export default App;
