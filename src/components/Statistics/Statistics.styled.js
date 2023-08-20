import styled from 'styled-components';

const StatisticElement = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: calc(100% / 5);
  background-color: ${props => props.backColor};
`;

export default StatisticElement;
