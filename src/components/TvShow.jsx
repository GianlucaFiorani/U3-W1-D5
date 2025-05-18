import { Button, Container } from "react-bootstrap";

import { Component } from "react";
import PageTitle from "./PageTitle";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import MovieCarousel from "./MovieCarousel";

class TvShow extends Component {
  state = {
    change: true,
  };

  carouselChange = () => {
    this.setState({ change: !this.state.change });
  };

  render() {
    return (
      <>
        <Container className="px-2">
          <MyNav
            submitVrify={this.props.submitVrify}
            search={this.props.searchSubmit}
            reset={this.props.reset}
            accountLink={this.props.accountLink}
            settingsLink={this.props.settingsLink}
            tvShowLink={this.props.tvShowLink}
            setting={this.props.settings}
            home={this.props.home}
            show={this.props.show}
            movie={this.props.movie}
            homeLink={this.props.homeSelect}
            showLink={this.props.showSelect}
            movieLink={this.props.movieSelect}
          />
          <PageTitle changeType={this.carouselChange} home={this.props.home} show={this.props.show} movie={this.props.movie} />
          {this.props.home && (
            <MovieCarousel submitted={this.props.submitted} search={true} home={this.props.home} id={this.props.search} change={this.state.change} />
          )}
          <MovieCarousel home={this.props.home} id={this.props.home ? "Samurai" : this.props.movie ? "Harry Potter" : "Friends"} change={this.state.change} />
          <MovieCarousel home={this.props.home} id={this.props.home ? "Horror" : this.props.movie ? "Rocky" : "Super"} change={this.state.change} />
          <MovieCarousel home={this.props.home} id={this.props.home ? "Love" : this.props.movie ? "Batman" : "Murder"} change={this.state.change} />
          {this.props.movie && <MovieCarousel home={this.props.home} id="Star Wars" change={this.state.change} />}
          <MyFooter />
        </Container>
      </>
    );
  }
}

export default TvShow;
