import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {
  const { searchUsers, clearUsers, showClear } =
    useContext(GithubContext);

  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState('');

  const history = useHistory();

  const onSubmit = event => {
    event.preventDefault();
    if (text === '') {
      setAlert('Please type something', 'light');
    } else {
      searchUsers(text);
      setText('');
      history.push('/');
    }
  };

  const onChange = event => setText(event.target.value);

  return (
    <div className='search-container'>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn-search'
        />
      </form>
      {showClear && (
        <div className='btn-clear-container'>
          <button
            onClick={clearUsers}
            className='btn-clear'
          >
            Clear Users
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
