export const STATS_DATA = [
  {
    id: 1,
    statsTitle: "Outreach (past 28 days)",
    chartTitle: "Emails sent per day",
    stats: [
      {
        id: 1,
        desc: "Calls booked",
        value: 5029,
        indicator: {
          value: 27,
          label: "%",
          down: true,
        },
      },
      {
        id: 2,
        desc: "Emails sent",
        value: 127400,
        indicator: {
          value: 23,
          label: "%",
          down: true,
        },
      },
      {
        id: 3,
        desc: "Social impressions",
        value: 180500,
        indicator: {
          value: 4.3,
          label: "%",
        },
      },
    ],
    barChartStats: {
      series: [
        {
          name: "Email",
          data: [8000, 5000, 0, 0],
        },
        {
          name: "Email",
          data: [8000, 5500, 8000, 5500],
        },
        {
          name: "Email",
          data: [6000, 6500, 6000, 4400],
        },
        {
          name: "Email",
          data: [5000, 9000, 7000, 0],
        },
        {
          name: "Email",
          data: [0, 4000, 6000, 0],
        },
      ],
      xaxis: {
        categories: ["24 Oct", "31 Oct", "7 Nov", "14 Nov"],
      },
    },
  },

  {
    id: 2,
    statsTitle: "Calls (past 28 days)",
    chartTitle: "Calls per day",
    stats: [
      {
        id: 1,
        desc: "No. of calls",
        value: 6580,
        indicator: {
          value: 13,
          label: "%",
        },
      },
      {
        id: 2,
        desc: "Avg. duration",
        value: 13,
        label: "min",
        indicator: {
          value: 3,
          label: "min",
          down: true,
        },
      },
    ],
    barChartStats: {
      series: [
        {
          name: "Call",
          data: [8000, 5000, 0, 0],
        },
        {
          name: "Call",
          data: [8000, 6000, 8000, 5500],
        },
        {
          name: "Call",
          data: [6000, 6500, 6000, 4400],
        },
        {
          name: "Call",
          data: [5000, 9000, 7000, 0],
        },
        {
          name: "Call",
          data: [0, 4000, 6000, 0],
        },
      ],
      xaxis: {
        categories: ["24 Oct", "31 Oct", "7 Nov", "14 Nov"],
      },
    },
  },
  {
    id: 3,
    statsTitle: "Conversations (past 28 days)",
    chartTitle: "Revenue per day",
    stats: [
      {
        id: 1,
        desc: "New customers",
        value: 211,
        indicator: {
          value: 26,
          label: "%",
          down: true,
        },
      },
      {
        id: 2,
        desc: "Revenue",
        value: 85100,
        indicator: {
          value: 11800,
          down: true,
          showCurrency: true,
        },
      },
      {
        id: 3,
        isGaugeChart: true,
        title: "Win Rate",
        min: 0,
        max: 10,
        value: 3.207,
      },
    ],
    barChartStats: {
      formatBigNumbers: true,
      series: [
        {
          name: "$",
          data: [8000, 5000, 0, 0],
        },
        {
          name: "$",
          data: [8000, 6000, 8000, 5500],
        },
        {
          name: "$",
          data: [6000, 6500, 6000, 4400],
        },
        {
          name: "$",
          data: [5000, 9000, 7000, 0],
        },
        {
          name: "$",
          data: [0, 4000, 6000, 0],
        },
      ],
      xaxis: {
        categories: ["24 Oct", "31 Oct", "7 Nov", "14 Nov"],
      },
    },
  },
];
