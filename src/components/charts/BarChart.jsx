import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { BAR_CHART_OPTIONS } from "@/constants";
import { nFormatter } from "@/helpers";

const BarChart = ({ options }) => {
  let chartOptions = {
    ...BAR_CHART_OPTIONS,
    xaxis: options.xaxis,
  };

  if (options.formatBigNumbers) {
    chartOptions.yaxis = {
      ...BAR_CHART_OPTIONS.yaxis,
      labels: {
        formatter(value) {
          let number = nFormatter(value, 2);
          return `$${number.value + number.symbol}`;
        },
      },
    };
  }

  const [ApexCharts, setApexCharts] = useState(null);

  useEffect(() => {
    // lazy loading to get more performance
    import("react-apexcharts").then(({ default: ApexCharts }) => {
      setApexCharts(
        <ApexCharts
          options={chartOptions}
          series={options.series}
          height={170}
          type="bar"
        />
      );
    });
  }, []);

  if (!ApexCharts) return null;

  return ApexCharts;
};

// validate props
BarChart.propTypes = {
  options: PropTypes.object.isRequired,
};

export default BarChart;
