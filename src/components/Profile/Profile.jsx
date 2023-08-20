import css from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({
  userAvatar,
  userName,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={css.profile}>
      <div>
        <img src={userAvatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{userName}</p>
        <p className={css.tag}>@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  userAvatar: PropTypes.string,
  userName: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
