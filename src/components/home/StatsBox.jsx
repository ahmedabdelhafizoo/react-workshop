import PropTypes from "prop-types";
import GaugeChart from "@/components/charts/GaugeChart";
import { nFormatter } from "@/helpers";

const StatsBox = ({ stat }) => {
  return stat.isGaugeChart ? (
    <div className="stats__card__row__item">
      <GaugeChart options={stat} />
    </div>
  ) : (
    <div className="stats__card__row__item">
      <h3 className="stats__card__value">
        {stat.label || stat.value < 10000 ? (
          new Intl.NumberFormat().format(stat.value)
        ) : (
          <>
            {nFormatter(stat.value, 1).value}
            <small>{nFormatter(stat.value, 1).symbol}</small>
          </>
        )}
        {stat.label && <small>{stat.label}</small>}
      </h3>
      <p className="stats__card__desc">{stat.desc}</p>
      <strong
        className={`stats__card__indicator ${stat.indicator.down && "down"}`}
      >
        {stat.indicator.showCurrency && <small>$</small>}
        {stat.indicator.label ? (
          <>
            {stat.indicator.value}
            <small>{stat.indicator.label}</small>
          </>
        ) : (
          <>
            {nFormatter(stat.indicator.value, 1).value}
            <small>{nFormatter(stat.indicator.value, 1).symbol}</small>
          </>
        )}
      </strong>
    </div>
  );
};

// validate props
StatsBox.propTypes = {
  stat: PropTypes.object.isRequired,
};

export default StatsBox;
