import { useState, useEffect } from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent';
import { Container, Row, Col} from 'react-bootstrap'
import './App.css';


function App() {

  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");
  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
    .then(res => res.json());

    setTopAnime(temp.top.slice(0, 5));

  };

  const HandleSearch = e => {
    e.preventDefault();
    FetchAnime(search)
  }

  const FetchAnime = async (query) => {

    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}o&page=1`)
    .then(res => res.json());

    console.log(temp.results)

    setAnimeList(temp.results)

  }

  useEffect(() => {

    GetTopAnime();

    console.log("Top Anime")

  }, [])

  console.log(topAnime)

  return (
    <>

    <Container>
      <Row>
        <Col>


        <div>

          < Header/>

        </div>

        <div>
          <div className="content-wrap">
            < Sidebar
              topAnime={topAnime} />
              < br/>
            < MainContent
                HandleSearch={HandleSearch}
                search={search}
                setSearch={setSearch}
                
                animeList={animeList}
                
            />

          </div>
        </div>


        </Col>
      </Row>
    </Container>


  
    </>

  );
}

export default App;
