import styled from '@emotion/styled'
export const List = styled.ul`
list-style: none;

`
export const FriendAvatar = styled.img`
  width: 60px;
  height: 60px;
  padding: 8px;
  margin-right: 20px;
  background-color: #85b6e7;
  border-radius: 8px;
  
`
export const FriendName = styled.p`
  font-size: 18px;
  margin-left: 20px;
  padding-right: 8px;
`;
export const FriendStatus = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 10px;
  
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const FrienItem = styled.li`
  display: flex;
  width: 300px;
  background-color: #70ace7;;
  align-items: center;
  margin: 0px auto;
  padding: 10px;
  border-radius: 5px;
 margin-bottom: 20px;
  }
`;