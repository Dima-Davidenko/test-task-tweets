import React from 'react';
import { useLocation } from 'react-router-dom';

import UserList from '../../components/UserList/UserList';

const Home = ({ users }) => {
  const location = useLocation();
  return (
    <UserList
      users={users}
      loadedUsersCount={location?.state?.loadedUsersCount}
      chosenFilter={location?.state?.chosenFilter}
    />
  );
};

export default Home;
