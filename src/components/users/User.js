import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/GithubContext';

const User = ({ match }) => {
  const { getUser, loading, user, repos, getUserRepos } =
    useContext(GithubContext);

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hirable,
    blog,
    company,
  } = user;

  if (loading) return <Spinner />;

  return (
    <div className='user-container'>
      <div className='user-top'>
        <Link to='/' className='btn-back'>
          Back to Search
        </Link>
        <span className='hirable'>
          Hirable:{' '}
          {hirable ? (
            <i className='fa-regular fa-circle-check green' />
          ) : (
            <i className='fa-regular fa-circle-xmark red' />
          )}
        </span>
      </div>
      <div className='user-card user-page'>
        <div className='user-img'>
          <img
            src={avatar_url}
            className='round-img'
            alt={name}
          />
          <h1>{name}</h1>
          <p>Location:{location}</p>
        </div>
        <div>
          {bio && (
            <div className='user-bio'>
              <h3>Bio</h3>
              <p>{bio}</p>
            </div>
          )}
          <a href={html_url} className='btn-github'>
            &ensp; <i className='fab fa-github'></i> &ensp;
            GitHub Profile
          </a>
          <ul className='user-data'>
            <li>
              {login && (
                <>
                  <strong>Username: </strong>{' '}
                  <span>{login}</span>
                </>
              )}
            </li>
            <li>
              {company && (
                <>
                  <strong>Company: </strong>{' '}
                  <span>{company}</span>
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  <strong>Website: </strong>{' '}
                  <span>{blog}</span>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='user-badges'>
        <div className='badge badge-primary'>
          Followers: {followers}
        </div>
        <div className='badge badge-success'>
          Following: {following}
        </div>
        <div className='badge badge-light'>
          Public Repos: {public_repos}
        </div>
        <div className='badge badge-dark'>
          Public Gists: {public_gists}
        </div>
      </div>
      <div>
        <Repos repos={repos} />
      </div>
    </div>
  );
};

export default User;
