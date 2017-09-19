/**
*
* LineChart
*
*/

import React from 'react';
import { select } from 'd3-selection';

import chart from './chart';


class LineChart extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      value: 5,
    };

    this.chartFn = chart();

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  componentDidMount() {
    this.updateChart();
  }

  componentDidUpdate() {
    this.updateChart();
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
      <div>
        <button onClick={this.handleIncrement}>+1</button>
        <button onClick={this.handleDecrement}>-1</button>
        {this.state.value}
        <div ref={(div) => (this.chartContainer = div)} />
      </div>
    );
  }
}

LineChart.propTypes = {

};

export default LineChart;
