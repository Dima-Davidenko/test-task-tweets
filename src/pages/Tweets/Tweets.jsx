import { Link, useLocation, useNavigate } from 'react-router-dom';
import css from './Tweets.module.css';
import { useEffect } from 'react';
const Tweets = ({ tweets }) => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!location?.state?.name) navigate('/');
  });
  return (
    <div className={css.container}>
      <Link
        to="/"
        state={{
          loadedUsersCount: location?.state?.loadedUsersCount,
          chosenFilter: location?.state?.chosenFilter,
        }}
        className={css.link}
      >
        <span>Go Back</span>
      </Link>
      <div className={css.wrapper}>
        <p className={css.name}>{location?.state?.name}</p>
        <div className={css.wrapperText}>
          <p className={css.text}>{location?.state?.tweets}</p>
          <p className={css.text}>{tweets} Tweets</p>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
