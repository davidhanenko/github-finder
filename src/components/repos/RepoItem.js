import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className='repo'>
      <h3>
        <a href={repo.html_url}>
          {repo.name}{' '}
          <i className='fa-sharp fa-solid fa-arrow-up-right-from-square'></i>
        </a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
