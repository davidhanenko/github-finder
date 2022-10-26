import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/GithubContext';
import { useContext } from 'react';

const Users = () => {
  const { loading, users } = useContext(GithubContext);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        {users.length === 0 ? (
          <div className='users-container-placeholder'></div>
        ) : (
          <div className='users-container'>
            {users.map(user => (
              <UserItem key={user.id} user={user} />
            ))}
          </div>
        )}
      </>
    );
  }
};

export default Users;
