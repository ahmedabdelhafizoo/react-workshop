import PropTypes from "prop-types";
import { useEffect } from "react";
import { renderGauge } from "@/vendors/gauge-chart";

const GaugeChart = ({ options }) => {
  let { id, title, value, min = 0, max = 100 } = options;

  useEffect(() => {
    renderGauge(document.getElementById(id));
  }, []);

  return (
    <div className="gauge-chart">
      <p className="gauge-chart__title">{title}</p>
      <div
        id={id}
        className="gauge-chart__wrapper"
        max="100"
        degree="180"
        value={(value * 100) / max}
      ></div>
      <div className="gauge-chart__footer">
        <span>
          {min} <small>%</small>
        </span>
        <span>
          {max} <small>%</small>
        </span>
      </div>
      <h3 className="stats__card__value stats__card__value--sm">
        {value}
        <small>%</small>
      </h3>
    </div>
  );
};

// validate props
GaugeChart.propTypes = {
  options: PropTypes.object.isRequired,
};

export default GaugeChart;
