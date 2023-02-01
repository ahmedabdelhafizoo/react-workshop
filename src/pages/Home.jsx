import BarChart from "@/components/charts/BarChart";
import StatsBox from "@/components/home/StatsBox";
import { STATS_DATA } from "@/data";

function Home() {
  return (
    <section className="stats container">
      {STATS_DATA.map((item) => (
        <div className="stats__row" key={item.id}>
          <div className="stats__card">
            <h2 className="stats__card__title">{item.statsTitle}</h2>
            <div className="stats__card__row">
              {item.stats.map((stat) => (
                <StatsBox key={stat.id} stat={stat} />
              ))}
            </div>
          </div>
          <div className="stats__card">
            <h2 className="stats__card__title">{item.chartTitle}</h2>
            <BarChart options={item.barChartStats} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Home;
