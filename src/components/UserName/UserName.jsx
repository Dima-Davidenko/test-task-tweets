import css from './UserName.module.css';
const UserName = ({ name }) => {
  return (
    <div>
      <p className={css.text}>{name}</p>
    </div>
  );
};

export default UserName;
