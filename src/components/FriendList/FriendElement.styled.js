import styled from 'styled-components';

const FriendElement = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid blue;
  padding: 5px 10px;
  .status {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => (props.status ? 'green' : 'red')};
  }
`;

export default FriendElement;
