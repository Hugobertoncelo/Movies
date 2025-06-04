import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import { getMovies, getTopMovies } from "../../services/getData";

function Movies() {
  const [featuredMovie, setFeaturedMovie] = useState();
  const [topMovies, setTopMovies] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const [featured, top] = await Promise.all([
          getMovies(),
          getTopMovies(),
        ]);
        setFeaturedMovie(featured);
        setTopMovies(top);
      } catch (error) {
        console.error("Erro ao carregar filmes:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {featuredMovie && (
        <Slider info={[featuredMovie]} title="Destaque da Semana" />
      )}
      {topMovies && <Slider info={topMovies} title="Top Filmes" />}
    </div>
  );
}

export default Movies;
