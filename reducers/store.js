import {
  RETRIEVED,
} from '../types/store';

const initState = {
  configs: {},
};

export default (state = initState, action) => {
  switch (action.type) {
    case RETRIEVED:
      return {
        ...state,
        configs: action.payload,
      };
    default:
      return state;
  }
};
