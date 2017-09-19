/*
 *
 * Visualize
 *
 */

import 'golden-layout/src/css/goldenlayout-base.css';
import 'golden-layout/src/css/goldenlayout-light-theme.css';

import LineChart from 'components/LineChart';
import GoldenLayout from 'golden-layout';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectVisualize from './selectors';

const components = [
  LineChart,
];

export class Visualize extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.config = {
      content: [{
        type: 'row',
        content: [{
          type: 'react-component',
          component: 'LineChart',
          componentState: { label: 'A' },
        }, {
          type: 'column',
          content: [{
            type: 'component',
            componentName: 'testComponent',
            componentState: { label: 'B' },
          }, {
            type: 'component',
            componentName: 'testComponent',
            componentState: { label: 'C' },
          }],
        }],
      }],
    };

    this.layout = new GoldenLayout(this.config, this.layoutParent);

    this.layout.registerComponent('testComponent', (container, componentState) => {
      container.getElement().html(`<h2>${componentState.label}</h2>`);
    });

    components.forEach((component) => {
      this.layout.registerComponent(component.name, component);
    });

    this.layout.init();

    this.layoutParentStyle = {
      height: '100%',
      width: '100%',
    };
  }

  render() {
    const layoutStyle = {
      height: '100vh',
      width: '100%',
    };

    return (
      <div className="test" ref={(div) => this.layoutParent = div }
        style={layoutStyle}/>
    );
  }
}

Visualize.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Visualize: makeSelectVisualize(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Visualize);
