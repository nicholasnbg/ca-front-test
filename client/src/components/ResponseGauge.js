import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js";
import PropTypes from "prop-types";

import { responseColors, gaugeColors } from "./colors";

//Code pulled from StackOverflow to allow text in center of gauge
const originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);

    // Change this up to make inner text smaller, change this down to make inner text larger
    const fontSizeFactor = 114;

    const chart = this.chart;
    const width = chart.chart.width,
      height = chart.chart.height,
      ctx = chart.chart.ctx;

    const fontSize = (height / fontSizeFactor).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    //Sets inner gauge text to response number + %
    const text = chart.config.data.datasets[0].data[0] + "%",
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2;

    ctx.fillText(text, textX, textY);
  }
});

export default class ResponseGauge extends Component {
  state = {
    colors: responseColors,
    data: {
      labels: ["% Responded", "% No Reponse"],
      datasets: [
        {
          data: [0, 0],
          backgroundColor: gaugeColors
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

    //Set gauge sections to response percentages
    data.datasets[0].data = [responsePerc, 100 - responsePerc];

    // Set color of response bar
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

ResponseGauge.propTypes = {
  responsePerc: PropTypes.number.isRequired
};
