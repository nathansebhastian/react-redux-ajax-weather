import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return state.concat([action.payload.data]);
      // NOT state.push BECAUSE DIRECT MUTATION IS BAD PRACTICE
      // OR USE THIS PUSH TO INDEX 0 OF STATE
      // return [action.payload.data, ...state];
  }
  return state;
}
