import React from 'react'
import {Card, Button} from 'react-bootstrap'

function AnimeCard({anime}) {
    return (



        <div className="col-3 my-3 fluid">
          
              <Card className="card w-75 h-100 mx-auto">
              <Card.Img variant="top" src={anime.image_url}/>
            <Card.Body>
              <Card.Title>{ anime.title }</Card.Title>
              <Card.Text>
                Rating: { anime.score }
              </Card.Text>
              <Button variant="primary" href={anime.url} target="_blank">More</Button>
            </Card.Body>
            </Card>


        </div>







    )
}

export default AnimeCard

