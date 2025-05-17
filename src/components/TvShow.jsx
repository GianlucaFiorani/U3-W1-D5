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
          <MyNav accountLink={this.props.accountLink} settingsLink={this.props.settingsLink} tvShowLink={this.props.tvShowLink} setting={this.props.settings} />
          <PageTitle changeType={this.carouselChange} />
          <MovieCarousel id="Harry Potter" change={this.state.change} />
          <MovieCarousel id="Lord of the Rings" change={this.state.change} />
          <MovieCarousel id="Batman" change={this.state.change} />
          <MovieCarousel id="Star Wars" change={this.state.change} />
          <MyFooter />
        </Container>
      </>
    );
  }
}

export default TvShow;
