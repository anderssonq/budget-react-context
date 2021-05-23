import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  let _expenses = state.expenses;
  switch (action.type) {
    case "EDIT_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    case "ADD_EXPENSE":
      _expenses.unshift(action.payload);
      return {
        ...state,
        expenses: _expenses,
      };
    case "REMOVE_EXPENSE":
      const id = action.payload;
      _expenses = _expenses.filter((e) => e.id !== id);
      return {
        ...state,
        expenses: _expenses,
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    {
      id: 1,
      name: "shopping",
      cost: 50,
    },
    {
      id: 2,
      name: "shopping 2",
      cost: 50,
    },
    {
      id: 3,
      name: "shopping 3",
      cost: 50,
    },
    {
      id: 4,
      name: "shopping 4",
      cost: 50,
    },
  ],
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
