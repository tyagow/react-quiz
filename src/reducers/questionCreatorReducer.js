import { UPDATE_QUESTION } from "../actions/questionsActions";

const initialState = { item: {}, answers: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUESTION:
      return { ...state, item: action.payload };

    default:
      return state;
  }
};
