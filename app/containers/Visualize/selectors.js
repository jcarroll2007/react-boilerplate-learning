import { createSelector } from 'reselect';

/**
 * Direct selector to the visualize state domain
 */
const selectVisualizeDomain = () => (state) => state.get('visualize');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Visualize
 */

const makeSelectVisualize = () => createSelector(
  selectVisualizeDomain(),
  (substate) => substate.toJS()
);

export default makeSelectVisualize;
export {
  selectVisualizeDomain,
};
