import React, { useContext } from 'react';
import RepoItem from './RepoItem';
import GithubContext from '../../context/github/GithubContext';

const Repos = () => {
  const { repos } = useContext(GithubContext);

  return (
    <div className='repos-container'>
      {repos.map(repo => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

export default Repos;
