import { ACTIONS } from './../actions/actions';
import initialState, { ISystemState } from '../definitions/definitions';

function valueReducer(state: ISystemState = initialState, action: any) {
  switch (action.type) {
    case ACTIONS.CHANGE_LOL_VALUE_RANDOMLY:
      const nextValue: number = Math.min(
        Math.floor(action.value * state.value + 1.1),
        100
      );
      return Object.assign({}, state, {
        value: nextValue >= 100 ? 0 : nextValue
      });
    default:
      return state;
  }
}

export default valueReducer;
