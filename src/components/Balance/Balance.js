import React from "react";
import { useSelector } from "react-redux";

export const Balance = () => {
  const transactions = useSelector((state) => state.transactions.transactions);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((total, amount) => (total += amount), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};
