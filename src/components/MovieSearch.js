import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Display from './Display';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import { Button } from 'react-bootstrap';


const MovieSearch = () => {
    const [search, setSearch] = useState('')
    const [movieResult, setMovieResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const fetchMovieDetails = async() => {
        setLoading(true)
        axios.get(`https://www.omdbapi.com/?apikey=eb2021cf&s=${search}&type=movie`)
        .then((response) => {
            if(response.data.Response === "True") {
                setMovieResult(response.data.Search)
                setLoading(false)
            }
        })
        .catch((error) => {
            setErrorMessage("Unable to fetch the movie list")
            setLoading(false)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchMovieDetails()
    },[search])
  return (
    <div>
        <Form style={{ marginTop: 20 }}>
            <Form.Group controlId='formMovieSearch'>
                <Form.Control 
                    type='text' 
                    placeholder='Search For movie' 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Form.Group>
        </Form>
        {loading ? <Spinner animation="grow" /> : <Display movieResult={movieResult}/>}
        {errorMessage && <div className='error'>{errorMessage}</div> }
    </div>
  )
}

export default MovieSearch