import * as types from './type';

const initialState = {
  curSysOpt: "home111",          // 当前系统
};

function Test (state = initialState, action) {
  switch (action.type) {
  case types.CUR_SYS_OPT:
    return Object.assign({}, state, {curSysOpt: action.data});
  default:
    return state;
  }
  return state;
}

export default Test;


