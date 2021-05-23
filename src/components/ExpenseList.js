import React, { useContext, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  const [listExpenses, setListExpenses] = useState(expenses);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const _listList = expenses.filter((e) => {
      return e.name.search(value) !== -1;
    });
    setListExpenses(_listList);
  };

  let listRendered = listExpenses.length ? (
    <ul className="list-group">
      {listExpenses.map((e) => (
        <ExpenseItem id={e.id} name={e.name} cost={e.cost} key={e.id} />
      ))}
    </ul>
  ) : (
    <p>There's not expenses</p>
  );

  return (
    <>
      <div className="col-sm">
        <input
          placeholder="Search"
          id="search"
          type="text"
          className="form-control"
          onChange={handleSearch}
        />
        <hr />
      </div>
      {listRendered}
    </>
  );
};

export default ExpenseList;
