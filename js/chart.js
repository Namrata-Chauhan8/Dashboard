var xValues = ["Present", "Late", "Absent", "Holiday"];
var yValues = [90.98, 4.02, 2, 4.02];
var barColors = ["#f3f5f9", "#ffb71c", "#ff8200", "#ff931e"];

const ctx = document.getElementById("myChart").getContext("2d");

const myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true, // Keep tooltips enabled
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    cutout: "80%", // Doughnut hole size
  },
  plugins: [
    {
      // beforeDraw: function(chart) {
      //   const ctx = chart.ctx;
      //   const width = chart.width;
      //   const height = chart.height;
      //   ctx.restore();

      //   const fontSize = (height / 114).toFixed(2);
      //   ctx.font = `${fontSize}em sans-serif`;
      //   ctx.textBaseline = 'middle';

      //   const text = chart.data.datasets[0].data[0] + '%';
      //   const textX = Math.round((width - ctx.measureText(text).width) / 2);
      //   const textY = height / 2;

      //   ctx.fillText(text, textX, textY);
      //   ctx.save();
      // },
      afterEvent: function (chart, args) {
        if (args.event.type === "mousemove") {
          const chartElement = document.getElementById("myChart");
          chartElement.classList.toggle("enlarge"); // Toggle enlarge class on click

          const activePoints = chart.getElementsAtEventForMode(
            args.event,
            "nearest",
            { intersect: true },
            false
          );

          if (activePoints.length) {
            const index = activePoints[0].index;
            const value = chart.data.datasets[0].data[index];
            const label = chart.data.labels[index];

            const ctx = chart.ctx;
            const width = chart.width;
            const height = chart.height;

            ctx.restore();
            ctx.font = "1.5em sans-serif";
            ctx.textBaseline = "middle";

            const text = `${label}: ${value}%`;
            const textX = Math.round((width - ctx.measureText(text).width) / 2);
            const textY = height / 2;

            ctx.fillText(text, textX, textY);
            ctx.save();
          }
        }
      },
    },
  ],
});
