import StatisticElement from './Statistics.styled';
import PropTypes from 'prop-types';

const StatsItem = ({ dataItem: { label, percentage } }) => {
  return (
    <StatisticElement className="item">
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
