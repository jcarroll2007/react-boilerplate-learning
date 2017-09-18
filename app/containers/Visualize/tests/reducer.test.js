
import { fromJS } from 'immutable';
import visualizeReducer from '../reducer';

describe('visualizeReducer', () => {
  it('returns the initial state', () => {
    expect(visualizeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
