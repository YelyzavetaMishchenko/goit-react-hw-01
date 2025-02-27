import React from "react";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionTable}>
      <thead className={css.transactionHead}>
        <tr>
          <th className={css.transactionRow}>Type</th>
          <th className={css.transactionRow}>Amount</th>
          <th className={css.transactionRow}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <tr
            key={id}
            className={
              index % 2 === 0 ? css.transactionEven : css.transactionOdd
            }
          >
            <td className={css.transactionData}>{type}</td>
            <td className={css.transactionData}>{amount}</td>
            <td className={css.transactionData}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
