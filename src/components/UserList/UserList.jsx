import React, { useEffect, useRef, useState } from 'react';
import css from './UserList.module.css';
import { FILTER } from '../../constants/constants';
import { filterUsers, getUsersWithSubscription } from '../../utils/utils';
import UserCard from '../UserCard/UserCard';
import { getUsers } from '../../utils/userAPI';

const UserList = ({ loadedUsersCount, chosenFilter }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [showLoadMoreBtn, setshowLoadMoreBtn] = useState(true);
  const [userFilter, setUserFilter] = useState(chosenFilter || FILTER.SHOW_ALL);
  const isFirstLoading = useRef(true);

  useEffect(() => {
    if (isFirstLoading.current) {
      isFirstLoading.current = false;
      getUsers({ limit: loadedUsersCount })
        .then(data => {
          setUsers(getUsersWithSubscription(data));
        })
        .catch(() => {});
    } else if (page > 1) {
      getUsers({ page: page + (loadedUsersCount ? loadedUsersCount / 3 - 1 : 0) })
        .then(data => {
          if (data.length === 0) {
            setshowLoadMoreBtn(false);
          } else {
            setUsers(prevUsers => {
              return [...prevUsers, ...getUsersWithSubscription(data)];
            });
          }
        })
        .catch(() => {});
    }
  }, [loadedUsersCount, page]);

  const handleBtnPagination = () => {
    setPage(prevPage => {
      return prevPage + 1;
    });
  };

  const handleSubscriptionChange = id => {
    setUsers(prevUsers => {
      const newUsers = [...prevUsers];
      return newUsers.map(user =>
        user.id !== id ? user : { ...user, subscription: !user.subscription }
      );
    });
  };

  return (
    <div className={css.container}>
      <div className={css.selectWrapper}>
        <select
          className={css.select}
          value={userFilter}
          onChange={e => setUserFilter(e.target.value)}
        >
          <option value={FILTER.SHOW_ALL}>show all</option>
          <option value={FILTER.FOLLOW}>follow</option>
          <option value={FILTER.FOLLOWINGS}>following</option>
        </select>
      </div>
      <ul className={css.userList}>
        {filterUsers(userFilter, users).map(user => (
          <li key={user.id} className={css.userItem}>
            <UserCard
              user={user}
              length={users.length}
              chosenFilter={userFilter}
              setSubscription={handleSubscriptionChange}
            />
          </li>
        ))}
      </ul>
      <div>
        {showLoadMoreBtn && (
          <button onClick={handleBtnPagination} className={css.btn}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default UserList;
