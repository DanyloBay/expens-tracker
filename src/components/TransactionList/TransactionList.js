import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Transaction } from "../Transaction/Transaction";
import { getTransactions } from "../../redux/selectors";
import { handleFetchTransactionsThunk } from "../../redux/operations";

export const TransactionList = () => {
  const dispatch = useDispatch();
  const { transactions } = useSelector(getTransactions);
  console.log(transactions);

  useEffect(() => {
    dispatch(handleFetchTransactionsThunk());
  }, [dispatch]);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
