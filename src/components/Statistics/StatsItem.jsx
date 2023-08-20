import StatisticElement from './Statistics.styled';
import PropTypes from 'prop-types';

const StatsItem = ({ dataItem: { label, percentage } }) => {
  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };

  return (
    <StatisticElement backColor={getRandomHexColor} className="item">
      <span className="label">.{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatisticElement>
  );
};

export default StatsItem;

StatsItem.propTypes = {
  dataItem: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
