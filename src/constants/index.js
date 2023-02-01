export const BAR_CHART_OPTIONS = {
  colors: ["#03D1FF"],
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  theme: {
    mode: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  stroke: {
    show: true,
    width: 6,
    colors: ["transparent"],
  },
  yaxis: {
    tickAmount: 3,
    labels: {
      formatter(value) {
        return new Intl.NumberFormat().format(value);
      },
    },
  },
};
