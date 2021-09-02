import React from 'react'

function Sidebar({ topAnime }) {
    return (

        <div>
            <nav>
                <h3 className="top">Top Anime</h3>
                {topAnime.map(anime => (

                    <a
                    href={anime.url} target="_blank" key={anime.mal_id}
                    rel="noreferrer" className="link">
                        <h4 className='tops'>{ anime.title }</h4>

                    </a>
                    
                    

                    

                ))}

            </nav>


        </div>

    )
}

export default Sidebar
