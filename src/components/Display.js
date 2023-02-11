import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap'

const Display = ({movieResult}) => {
    
  return (
    <Row lg={3} style={{ alignItems: 'stretch', margin: 30 }}>
        {
            movieResult.map((result) => {
                return (
                    <Col className='d-flex'>
                        <Card className="flex-fill" style={{ textAlign: 'center', justifyContent: 'space-evenly', alignItems:'center', marginTop: 30 }}>
                        <Card.Img 
                            
                            variant="top" 
                            src={result.Poster}
                        />
                        <Card.Body>
                            <Card.Title style={{ fontSize: 18}}>{result.Title}</Card.Title>
                            <Card.Text style={{ fontSize: 16 }}>
                                {result.Year}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                )
            })
        }
        
    </Row>
    
  )
}

export default Display