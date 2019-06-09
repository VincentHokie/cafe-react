import {
  MENU_ADDED,
  MENU_RETRIEVED,
} from '../types/menu.jsx';
import {
  ERROR_PAGE_CLEAR,
  ERROR_PAGE_DISPLAY,
} from '../types/error.jsx';
import axios from '../axios/axios.jsx';

const getMenu = () =>
  dispatch =>
    axios({
      url: '/v1/menu',
      method: 'GET',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });

      dispatch({
        type: MENU_RETRIEVED,
        payload: data,
      });
    }).catch((error) => {
      let userMessage = error.message;
      if (error.status === 503) {
        userMessage = 'Swarm mode must be enabled for this to work';
      }

      dispatch({
        type: ERROR_PAGE_DISPLAY,
        payload: error,
        userMessage,
      });
    });

const addMenu = () =>
  dispatch =>
    axios({
      url: '/v1/menu',
      method: 'POST',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });

      dispatch({
        type: MENU_ADDED,
        payload: data,
      });
    }).catch((error) => {
      const userMessage = error.message;

      dispatch({
        type: ERROR_PAGE_DISPLAY,
        payload: error,
        userMessage,
      });
    });

const MenuService = {
  getMenu,
  addMenu,
};

export default MenuService;
