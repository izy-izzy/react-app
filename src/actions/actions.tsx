export enum ACTIONS {
  CHANGE_LOL_VALUE_RANDOMLY = 'CHANGE_LOL_VALUE_RANDOMLY'
}

function changeValueRandomly(value: number) {
  const action = {
    type: ACTIONS.CHANGE_LOL_VALUE_RANDOMLY,
    value
  };
  return action;
}

export default changeValueRandomly;
