import React from 'react';
import css from './Followers.module.css';
import { formatFollowersCount } from '../../utils/utils';
const Followers = ({ followersCount }) => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>{formatFollowersCount(followersCount)} Followers</p>
    </div>
  );
};

export default Followers;
