import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/GithubContext';

const MoreBtn = React.forwardRef(({ ...props }, ref) => {
  const { toggleShowClear } = useContext(GithubContext);

  return (
    <a ref={ref} {...props} onClick={toggleShowClear}>
      {props.children}
    </a>
  );
});

const UserItem = ({
  user: { avatar_url, login, html_url },
}) => {
  return (
    <div className='user-card'>
      <img
        src={avatar_url}
        alt={login}
        className='round-img'
      />
      <h3>{login}</h3>

      <div className='btn-more'>
        <Link to={`/user/${login}`} component={MoreBtn}>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
