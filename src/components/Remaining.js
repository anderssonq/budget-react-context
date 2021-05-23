import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, curr) => {
    total = total + curr.cost;
    return total;
  }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";
  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: ${budget - totalExpenses}</span>
    </div>
  );
};
