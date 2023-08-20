import PropTypes from 'prop-types';

const TransactionItem = ({ dataTransaction }) => {
  return (
    <tr>
      <td>{dataTransaction.type}</td>
      <td>{dataTransaction.amount}</td>
      <td>{dataTransaction.currency}</td>
    </tr>
  );
};

export default TransactionItem;

TransactionItem.propTypes = {
  dataTransaction: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
    id: PropTypes.string,
  }),
};
