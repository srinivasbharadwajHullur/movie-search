import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Display from './Display';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


const MovieSearch = () => {
    const [search, setSearch] = useState('')
    const [movieResult, setMovieResult] = useState([])
    const fetchMovieDetails = async() => {
        axios.get(`http://www.omdbapi.com/?apikey=eb2021cf&s=${search}&type=movie`)
        .then((response) => {
            if(response.data.Response === "True") {
                setMovieResult(response.data.Search)
            }
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
        <Display movieResult={movieResult}/>
    </div>
  )
}

export default MovieSearch