import React from 'react';
import { Link } from 'react-router-dom';
import { saveSubscriprtionToLocalStorage } from '../../utils/utils';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import Followers from '../Followers/Followers';
import Logo from '../Logo/Logo';
import UserName from '../UserName/UserName';
import css from './UserCard.module.css';

const UserCard = ({ user, length, chosenFilter, setSubscription }) => {
  const { id, name, avatar, tweets, followers, subscription } = user;

  const changeSubscriptionStatus = () => {
    setSubscription(id);
    saveSubscriprtionToLocalStorage(id, subscription);
  };
  return (
    <div className={css.container}>
      <Logo className={css.logo} />
      <div className={css.picture}></div>
      <Avatar avatar={avatar} />
      <UserName name={name} />
      <Link
        to="/tweets"
        state={{ tweets, name, loadedUsersCount: length, chosenFilter }}
        className={css.link}
      >
        {tweets} Tweets
      </Link>
      <Followers followersCount={followers + (subscription ? 1 : 0)} />
      <Button subscription={subscription} setSubscription={changeSubscriptionStatus} />
    </div>
  );
};

export default UserCard;
