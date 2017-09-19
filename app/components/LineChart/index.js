/**
*
* LineChart
*
*/

import React from 'react';
import { select } from 'd3-selection';
import { Slider } from '@blueprintjs/core';
import '@blueprintjs/core/dist/blueprint.css';

import chart from './chart';


class LineChart extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      value: 50,
    };

    this.chartFn = chart();

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  componentDidMount() {
    this.updateChart();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  handleSliderChange(val) {
    this.setState({
      value: val,
    });
  }

  updateChart() {
    select(this.chartContainer)
      .data([this.state.value])
      .call(this.chartFn);
  }

  handleIncrement() {
    this.setState({
      value: this.state.value += 5,
    });
  }

  handleDecrement() {
    this.setState({
      value: this.state.value -= 5,
    });
  }

  render() {
    return (
      <div style={{ padding: '15px' }}>
        Drag the slider to change the size of the rectangle.
        <Slider
          min={0} max={100} stepSize={10} labelStepSize={10}
          onChange={this.handleSliderChange} value={this.state.value}
        />
        <div ref={(div) => (this.chartContainer = div)} />
      </div>
    );
  }
}

LineChart.propTypes = {

};

export default LineChart;
