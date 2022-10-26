/* eslint-disable import/no-anonymous-default-export */
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  SET_SHOW_CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

export const initialState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
  showClear: false,
};

const githubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        showClear: true,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        showClear: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
        showClear: false,
      };
    case SET_SHOW_CLEAR_USERS:
      return {
        ...state,
        showClear: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      throw Error(`No case for type ${action.type} found`);
  }
};

export default githubReducer;
