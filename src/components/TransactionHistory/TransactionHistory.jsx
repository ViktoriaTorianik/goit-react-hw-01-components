import PropTypes from 'prop-types';

import {
  History,
  TableHeader,
TableData} from './TransactionHistory.styled';
export const TransactionHistory = ({transactions}) => {
    return <History >
  <thead>
    <tr>
      <TableHeader>Type</TableHeader>
      <TableHeader>Amount</TableHeader>
      <TableHeader>Currency</TableHeader>
    </tr>
  </thead>

        <tbody>
            {transactions.map(({ id, type, amount, currency }) => (
<tr key = {id}>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </tr>
            ))}
    
  </tbody>
</History>
}
TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
    ),
}