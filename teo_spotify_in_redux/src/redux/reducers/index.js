const initialState = {
  main: {
    result: [1, 2, 3],
    selectElement: [],
  },
};

const mineReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED":
      return {
        ...state,
        main: {
          ...state.main,
          selectElement: [...state.main.selectElement, action.payload],
        },
      };
    default:
      return state;
  }
};

export default mineReducer;
