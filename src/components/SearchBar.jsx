import React,{ useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import MovieDisplay from './MovieDisplay';

const SearchBar = () => {
  const [movie, setMovie] = useState("");
  const [movieDetails, setMovieDetails] = useState([]);
  const [show, setShow] = useState(false);

  const handleMovieSearch = async(e) => {
    e.preventDefault();
    //Call the api
    await axios.get(`http://www.omdbapi.com/?apikey=1ff1f629&s=${movie}`)
    .then((response) => {
      if (response.data.Response === "True") {
        setMovieDetails(response.data.Search);
        setShow(true)
      }
    })
    .catch((error) => {
      console.log(error);
      setShow(false);
    })
  }

  return (
    <>
      <Form onSubmit={handleMovieSearch} className='mt-5'>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicMovieSearch">
              <Form.Control type="text" placeholder="Search For movie" value={movie} onChange={(e) => setMovie(e.target.value)} />
            </Form.Group>
            <Button style={{ display: 'flex', margin: '0px auto'}} variant='primary' type='submit'>Search</Button>
          </Col>
        </Row>
      </Form>
    {
      show ? <MovieDisplay movieDetails={movieDetails}/> : null
    }
    
    </>
  
  )
}

export default SearchBar