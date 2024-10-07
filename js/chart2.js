document.addEventListener("DOMContentLoaded", function () {
  const xValues = [0, 10, 20, 30, 40, 50, 60, 70, 80];
  const yValues = [0, 10, 20, 30, 40, 50, 60, 70, 80];
  const y2Values = [10, 30, 60, 20, 70, 10, 30, 50, 90];

  new Chart("myChart2", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          data: yValues,
          borderColor: "#fd7e14",
          fill: false,
        },
        {
          data: y2Values,
          borderColor: "#adb5bd",
          fill: false,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
        },
      },
      responsive: true,
    },
  });
});
