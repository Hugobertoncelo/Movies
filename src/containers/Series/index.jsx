import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import { getTopSeries, getPopularSeries } from "../../services/getData";

function Series() {
  const [topSeries, setTopSeries] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [top, popular] = await Promise.all([
          getTopSeries(),
          getPopularSeries(),
        ]);
        setTopSeries(top);
        setPopularSeries(popular);
      } catch (error) {
        console.error("Erro ao carregar séries:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {topSeries.length > 0 && <Slider info={topSeries} />}
      {popularSeries.length > 0 && (
        <Slider info={popularSeries} title="Séries Populares" />
      )}
    </div>
  );
}

export default Series;
