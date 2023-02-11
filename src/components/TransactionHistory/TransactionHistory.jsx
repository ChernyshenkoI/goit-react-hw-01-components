import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export  function TransactionHistory({ items }) {
  return (
    <table class={css.transactionHistory}>
      <thead className={css.tableName}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
