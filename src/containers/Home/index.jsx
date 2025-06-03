import api from "../../services/api";
import {
  Background,
  Info,
  Poster,
  Container,
  ContainerButtons,
} from "./styles";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeople, setTopPeople] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      setMovie(results[0]);
    }

    async function getTopMovies() {
      const {
        data: { results },
      } = await api.get("/movie/top_rated");

      setTopMovies(results);
    }

    async function getTopSeries() {
      const {
        data: { results },
      } = await api.get("/tv/top_rated");

      setTopSeries(results);
    }

    async function getPopularSeries() {
      const {
        data: { results },
      } = await api.get("/tv/popular");

      setPopularSeries(results);
    }

    async function getTopPeople() {
      const {
        data: { results },
      } = await api.get("/person/popular");

      setTopPeople(results);
    }

    getMovies();
    getTopMovies();
    getTopSeries();
    getPopularSeries();
    getTopPeople();
  }, []);

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
      {topSeries && <Slider info={topSeries} title={"Top Séries"} />}
      {popularSeries && (
        <Slider info={popularSeries} title={"Séries Populares"} />
      )}
      {topPeople && <Slider info={topPeople} title={"Top Artistas"} />}
    </>
  );
}

export default Home;
