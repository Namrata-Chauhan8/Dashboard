"use strict";

// Your data
var xValues = ["Present", "Late", "Absent", "Holiday"];
var yValues = [90.98, 4.02, 2, 4.02];
var barColors = ["#f3f5f9", "#ffb71c", "#ff8200", "#ff931e"];
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false // Hide the legend

      },
      tooltip: {
        enabled: true // Keep tooltips enabled

      }
    },
    responsive: true,
    maintainAspectRatio: false,
    cutout: '80%' // Doughnut hole size

  },
  plugins: [{
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
    afterEvent: function afterEvent(chart, args) {
      if (args.event.type === 'mousemove') {
        var chartElement = document.getElementById('myChart');
        chartElement.classList.toggle('enlarge'); // Toggle enlarge class on click

        var activePoints = chart.getElementsAtEventForMode(args.event, 'nearest', {
          intersect: true
        }, false);

        if (activePoints.length) {
          var index = activePoints[0].index;
          var value = chart.data.datasets[0].data[index];
          var label = chart.data.labels[index];
          var _ctx = chart.ctx;
          var width = chart.width;
          var height = chart.height;

          _ctx.restore();

          _ctx.font = '1.5em sans-serif';
          _ctx.textBaseline = 'middle';
          var text = "".concat(label, ": ").concat(value, "%");
          var textX = Math.round((width - _ctx.measureText(text).width) / 2);
          var textY = height / 2;

          _ctx.fillText(text, textX, textY);

          _ctx.save();
        }
      }
    }
  }]
});