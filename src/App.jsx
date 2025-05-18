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
    home: true,
    show: false,
    movie: false,
    search: "",
    submitted: false,
  };
  submitVrify = () => {
    this.setState({ submitted: true });
  };
  searchSubmit = (s) => {
    this.setState({ search: s });
  };
  reset = () => {
    this.setState({ tvShow: false });
    this.setState({ account: false });
    this.setState({ settings: false });
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
  homeSelect = () => {
    this.setState({ home: true });
    this.setState({ show: false });
    this.setState({ movie: false });
  };
  showSelect = () => {
    this.setState({ home: false });
    this.setState({ show: true });
    this.setState({ movie: false });
  };
  movieSelect = () => {
    this.setState({ home: false });
    this.setState({ show: false });
    this.setState({ movie: true });
  };
  render() {
    return (
      <>
        {this.state.tvShow && (
          <TvShow
            submitted={this.state.submitted}
            submitVrify={this.submitVrify}
            search={this.state.search}
            searchSubmit={this.searchSubmit}
            reset={this.reset}
            accountLink={this.accountSelect}
            settingsLink={this.settingSelect}
            tvShowLink={this.tvShowSelect}
            setting={this.state.settings}
            home={this.state.home}
            show={this.state.show}
            movie={this.state.movie}
            homeSelect={this.homeSelect}
            showSelect={this.showSelect}
            movieSelect={this.movieSelect}
          />
        )}
        {this.state.account && <Account tvShowLink={this.tvShowSelect} />}
        {this.state.settings && (
          <Settings
            reset={this.reset}
            accountLink={this.accountSelect}
            settingsLink={this.settingSelect}
            tvShowLink={this.tvShowSelect}
            setting={this.state.settings}
            home={this.state.home}
            show={this.state.show}
            movie={this.state.movie}
            homeSelect={this.homeSelect}
            showSelect={this.showSelect}
            movieSelect={this.movieSelect}
          />
        )}
      </>
    );
  }
}

export default App;
