import React from "react";
import { useDispatch } from "react-redux";
import { handleDeleteTransactionThunk } from "../../redux/operations";

export const Transaction = ({ transaction: { _id, text, amount } }) => {
  const dispatch = useDispatch();

  const handleDeleteTransaction = (id) => {
    dispatch(handleDeleteTransactionThunk(id));
  };

  const sign = amount < 0 ? "-" : "+";

  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      {text}{" "}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => handleDeleteTransaction(_id)}
      >
        X
      </button>
    </li>
  );
};
