import { Container } from "react-bootstrap";

import { Component } from "react";
import PageTitle from "./PageTitle";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import MovieCarousel from "./MovieCarousel";

class TvShow extends Component {
  render() {
    return (
      <>
        <Container className="p-0">
          <MyNav />
          <PageTitle />
          <MovieCarousel id="Harry Potter" />
          <MovieCarousel id="Lord of the Rings" />
          <MovieCarousel id="Batman" />
          <MovieCarousel id="Star Wars" />
          <MyFooter />
        </Container>
      </>
    );
  }
}

export default TvShow;
