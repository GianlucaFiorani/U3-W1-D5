import { Component } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";

class MovieCarousel extends Component {
  state = {
    movies: [],
    isLoading: true,
    hasError: false,
    errorMessage: "",
  };
  fetchMovies = async (id) => {
    console.log("fetching...");
    this.setState({ isLoading: true });
    try {
      const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f5beaab6&s=" + id);
      if (response.ok) {
        const movies = await response.json();
        this.setState({ movies: movies.Search }, () => {});
      } else {
        throw new Error("Errore nel caricamento film");
      }
    } catch (error) {
      console.log(error);
      this.setState({ hasError: true, errorMessage: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  componentDidMount() {
    this.fetchMovies(this.props.id);
    // this.carouselChange(false);
  }
  // carouselChange = (type) => {
  //   type ? (this.props.change = true) : (this.props.change = false);
  // };
  render() {
    return (
      <Container className="movie-container mt-5">
        <h2>{this.props.id} Collection</h2>
        {this.state.isLoading ? (
          <div>
            {" "}
            Loading... <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          <Row
            className={`movie-row mt-3 ${this.props.change && "flex-nowrap"}`}
            xs={!this.props.change && 1}
            sm={!this.props.change && 2}
            lg={!this.props.change && 3}
            xl={!this.props.change && 6}
          >
            {this.state.movies.map((movie) => (
              <Col className="my-1" key={`movie-${movie.imdbID}`}>
                <div className="d-flex justify-content-center">
                  <Card style={this.props.change ? { width: "10rem" } : null} data-bs-theme="dark">
                    <Card.Img variant="top" src={movie.Poster} />
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    );
  }
}
export default MovieCarousel;
