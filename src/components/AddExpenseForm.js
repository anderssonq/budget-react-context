import React, { useCallback, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../context/AppContext";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: uuidv4(),
      name,
      cost,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
    setName("");
    setCost(0);
  };

  const checkForm = useCallback(() => {
    if (name && cost) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, cost]);

  useEffect(() => {
    checkForm();
  }, [name, cost, checkForm]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm">
          <label form="name">Name</label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control"
            id="name"
          />
        </div>
        <div className="col-sm">
          <label form="cost">Cost</label>
          <input
            required
            type="text"
            value={cost}
            onChange={(e) => {
              const _value = parseFloat(e.target.value)
                ? parseFloat(e.target.value)
                : 0;

              setCost(_value);
            }}
            className="form-control"
            id="cost"
          />
        </div>
        <div className="col-sm">
          <button
            type="submit"
            className="btn btn-primary mt-2"
            disabled={!isValid}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
