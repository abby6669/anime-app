import React from 'react'
import {Card, Button, Row, Col} from 'react-bootstrap'

function AnimeCard({anime}) {


    return (



        // <div className="col-3 my-3">
          
        //       <Card className="card w-75 h-100 mx-auto">
        //       <Card.Img variant="top" src={anime.image_url}/>
        //     <Card.Body>
        //       <Card.Title>{ anime.title }</Card.Title>
        //       <Card.Text>
        //         Rating: { anime.score }
        //       </Card.Text>
        //       <Button variant="primary" href={anime.url} target="_blank">More</Button>
        //     </Card.Body>
        //     </Card>


        // </div>

        
        <div className="col-5 my-2">
        <Card className="card mb-5 row-5" >
        <Row>
          <Col>
            <Card.Img src={anime.image_url}/>

            <Card.Body>
              <Card.Title as="h1">
              { anime.title }
              </Card.Title>
              <Card.Text as="h4">
              Rating: { anime.score }
              </Card.Text>
            </Card.Body>
            {

              <Button href={anime.url} target="_blank">Read More</Button>
            }


          </Col>

        </Row>
      </Card>
      </div>  







    )
}

export default AnimeCard

