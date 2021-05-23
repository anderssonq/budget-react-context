import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(null);

  const handleEditForm = () => {
    setNewBudget(budget);
  };

  const handleSubmitEdit = () => {
    dispatch({
      type: 'EDIT_BUDGET',
      payload: newBudget
    })
    setNewBudget(null);
  };

  const editFormRender = newBudget ? (
    <input
      required
      type="text"
      value={newBudget}
      onChange={(e) => {
        const _value = parseFloat(e.target.value)
          ? parseFloat(e.target.value)
          : 0;

        setNewBudget(_value);
      }}
      className="form-control"
      id="cost"
    />
  ) : (
    <span>Budget: ${budget}</span>
  );
  return (
    <div className="alert alert-secondary d-flex justify-content-between align-items-center">
      {editFormRender}
      <button
        type="submit"
        className="btn btn-primary mt-2"
        onClick={newBudget ? handleSubmitEdit : handleEditForm}
      >
        {newBudget ? "Add" : "Edit"}
      </button>
    </div>
  );
};

export default Budget;
