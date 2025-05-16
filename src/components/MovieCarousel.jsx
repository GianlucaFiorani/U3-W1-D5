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
  }
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
          <Row className="movie-row flex-nowrap mt-3">
            {this.state.movies.map((movie) => (
              <Col key={`movie-${movie.imdbID}`}>
                <Card style={{ width: "8rem" }} data-bs-theme="dark">
                  <Card.Img variant="top" src={movie.Poster} />
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    );
  }
}
export default MovieCarousel;
