import FriendElement from './FriendElement.styled';
import PropTypes from 'prop-types';

const FriendListItem = ({ friendData: { avatar, isOnline, name } }) => {
  return (
    <FriendElement status={isOnline} className="item">
      <span className="status"></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </FriendElement>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  friendData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
