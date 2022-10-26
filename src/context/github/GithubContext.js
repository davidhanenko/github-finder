import axios from 'axios';
import { createContext, useReducer } from 'react';
import githubReducer, {
  initialState,
} from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_SHOW_CLEAR_USERS,
} from '../types';

const GithubContext = createContext(initialState);

export const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    githubReducer,
    initialState
  );

  let githubClientId;
  let githubClientSecret;

  if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret =
      process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  } else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
  }

  // Search Users
  const searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secter=${githubClientSecret}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // Get User
  const getUser = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?&client_id=${githubClientId}&client_secter=${githubClientSecret}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  // Get Repos
  const getUserRepos = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secter=${githubClientSecret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Hide Clear Users button
  const toggleShowClear = () =>
    dispatch({ type: SET_SHOW_CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  const value = {
    users: state.users,
    user: state.user,
    repos: state.repos,
    loading: state.loading,
    showClear: state.showClear,
    searchUsers,
    clearUsers,
    getUser,
    getUserRepos,
    toggleShowClear,
  };

  return (
    <GithubContext.Provider value={value}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
