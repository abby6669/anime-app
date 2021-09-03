import React from 'react'
import AnimeCard from './AnimeCard.js'
import { Form } from 'react-bootstrap'

function MainContent(props) {
    return (
        <main>
            <div className="main-head">
                <Form className="search-box" onSubmit={props.HandleSearch}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Anime."
                        required
                        value={props.search}
                        onChange={e => props.setSearch(e.target.value)} />
                </Form>
            </div>
            
            <div className="anime-list row container-fluid">
                {props.animeList.map(anime => {
                    return (

                        


                        
                        <AnimeCard

                        anime={anime}
                        key={anime.mal_id}
                        
                        />

                    );
                })}
            </div>

            



            

        </main>
    );
}

export default MainContent;
