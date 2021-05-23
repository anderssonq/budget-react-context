import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import PropTypes from "prop-types";

const ExpenseItem = ({ id, name, cost }) => {
  const { dispatch } = useContext(AppContext);

  const handleRemoveItem = () => {
    dispatch({
      type: "REMOVE_EXPENSE",
      payload: id,
    });
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-item-center">
      {name}
      <div>
        <span className="badge bg-primary badge-pill mr-3">${cost}</span>
        <TiDelete size="1.5em" onClick={handleRemoveItem}></TiDelete>
      </div>
    </li>
  );
};

ExpenseItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number || PropTypes.string]),
  name: PropTypes.string,
  cost: PropTypes.number,
};

export default ExpenseItem;
