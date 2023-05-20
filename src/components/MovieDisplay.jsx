import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

const MovieDisplay = ({movieDetails}) => {
  const navigate = useNavigate();
  const goToMovieDetails = (imdb) => {
    navigate("/individualmoviedetail/"+imdb)
  }
  return (
<Container>
    <Row>
        {movieDetails.map((movie, index) => {
            return (
                <Col key={movie.imdbID} md={4} style={{ marginBottom: '20px' }}>
                    <div className="card-wrapper">
                        <Card>
                            <div className="image-container">
                                <Card.Img
                                    className="poster-image"
                                    variant="top"
                                    src={movie.Poster}
                                />
                                <div className="image-overlay"></div>
                            </div>
                            <Card.Body>
                                <Card.Title>{movie.Title}</Card.Title>
                                <Button onClick={() => goToMovieDetails(movie.imdbID)} variant="primary">More Details</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            );
        })}
    </Row>
</Container>

  )
}

export default MovieDisplay