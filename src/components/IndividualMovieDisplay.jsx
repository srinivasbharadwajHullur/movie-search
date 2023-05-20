import React,{ useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';

const IndividualMovieDisplay = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState({});
  
  const fetchMovieDetails = async() => {
    await axios.get(`https://www.omdbapi.com/?apikey=1ff1f629&i=${params.imdb}`)
    .then((response) => {
      setMovieDetails(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {
    fetchMovieDetails()
  },[]);
  const goToHome = () => {
    navigate("/")
  }
  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <img src={movieDetails.Poster}/>
        </Col>
        <Col>
        <ListGroup>
          <ListGroup.Item>{movieDetails.Title}</ListGroup.Item>
          <ListGroup.Item>{movieDetails.Plot}</ListGroup.Item>
          <ListGroup.Item>{movieDetails.Genre}</ListGroup.Item>
          <ListGroup.Item>{movieDetails.Language}</ListGroup.Item>
          <ListGroup.Item>{movieDetails.Director}</ListGroup.Item>
          <ListGroup.Item>{movieDetails.Awards}</ListGroup.Item>
          <ListGroup.Item>{movieDetails.Actors}</ListGroup.Item>
        </ListGroup>
        </Col>
      </Row>
      <Button style={{ display: 'flex', margin: '0px auto' }} onClick={goToHome}>Home</Button>
    </Container>
  )
}

export default IndividualMovieDisplay