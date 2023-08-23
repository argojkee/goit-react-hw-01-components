import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friendList }) => {
  return (
    <ul className={css.friendList}>
      {friendList.map(friend => (
        <FriendListItem key={friend.id} friendData={friend} />
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
