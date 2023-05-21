import React from 'react';
import css from './Avatar.module.css';

const Avatar = ({ avatar }) => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <img className={css.avatar} src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Avatar;
