import { select } from 'd3-selection';
import 'd3-transition';


const LineChart = () => {
  const height = 300;
  const width = 300;

  const chart = (selection) => {
    selection.each(function chartIterator(d) {
      const container = select(this);

      let svg = container.selectAll('svg')
        .data([d]);
      svg = svg.enter().append('svg')
        .merge(svg)
        .attr('width', width)
        .attr('height', height);

      let rect = svg.selectAll('rect')
        .data([d]);

      const rectEnter = rect.enter().append('rect')
        .attr('fill', '#33CB96');

      rect = rect.merge(rectEnter)
        .transition()
        .duration(1000)
        .attr('height', (d) => d * 2)
        .attr('width', (d) => d * 2);
    });
  };

  return chart;
};

export default LineChart;
