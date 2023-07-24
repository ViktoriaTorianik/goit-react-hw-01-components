import PropTypes from 'prop-types';
import {
  Container,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity
} from './profile.styled';


export const Profile = ({src,  name, tag, location, stats}) => {
    return  <Container>
    <Avatar
      src={src}
      alt="User avatar"
     
    />
    <Name >{name}</Name>
    <Tag>{tag}</Tag>
      <Location >{location}</Location>
      <Stats >
      <li>
      <Label >Followers</Label>
      <Quantity >{stats.followers}</Quantity>
    </li>
    <li>
      <Label >Views</Label>
      <Quantity >{stats.views}</Quantity>
    </li>
    <li>
      <Label >Likes</Label>
      <Quantity >{stats.likes}</Quantity>
    </li>
  </Stats>
  </Container>
  

}
Profile.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};