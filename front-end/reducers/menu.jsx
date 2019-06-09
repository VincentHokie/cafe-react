import {
  MENU_ADDED,
  MENU_RETRIEVED,
} from '../types/menu.jsx';

const initState = {
  menu: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case MENU_ADDED:
      return {
        ...state,
        menu: state.menu.append(action.payload),
      };
    case MENU_RETRIEVED:
      return {
        ...state,
        menu: action.payload,
      };
    default:
      return state;
  }
};
