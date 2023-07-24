import PropTypes, { arrayOf } from 'prop-types';
import {
    List,
    FrienItem,
    FriendName,
    FriendAvatar,
FriendStatus} from './friendList.styled';
export const FriendList = ({friends}) => {
    return (<List >
        {friends.map(({ avatar, name, isOnline, id }) => (
            <FrienItem key={id} >
            <FriendAvatar src={avatar} alt="User avatar" width={48} /> 
              <FriendName>{name}</FriendName> 
               <FriendStatus status={isOnline}></FriendStatus> 
            </FrienItem>))}
  
    </List>);
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired
}
