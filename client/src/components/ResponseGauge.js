import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js";

var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);

    var chart = this.chart;
    var width = chart.chart.width,
      height = chart.chart.height,
      ctx = chart.chart.ctx;

    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    var text = chart.config.data.datasets[0].data[0] + "%",
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2;

    ctx.fillText(text, textX, textY);
  }
});

export default class ResponseGauge extends Component {
  state = {
    colors: ["#cc2900", "#e68a00", "#e6e600", "#2db300", "#43A089"],
    data: {
      labels: ["% Responded", "% No Reponse"],
      datasets: [
        {
          data: [0, 0],
          backgroundColor: ["#43A089", "#b5b5b5"]
        }
      ]
    },
    options: {
      cutoutPercentage: 63,
      tooltips: {
        enabled: true
      },
      legend: {
        display: false
      }
    }
  };

  componentDidMount() {
    let data = this.state.data;
    let { responsePerc } = this.props;
    data.datasets[0].data = [responsePerc, 100 - responsePerc];
    const respColor = this.state.colors[Math.floor((responsePerc - 1) / 20)];
    data.datasets[0].backgroundColor[0] = respColor;

    this.setState({ data });
  }

  render() {
    return (
      <div>
        <Doughnut data={this.state.data} options={this.state.options} />
      </div>
    );
  }
}
