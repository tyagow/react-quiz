import { CREATE_QUESTION } from "../actions/questionsActions";

const initialState = { item: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_QUESTION:
      return { ...state, item: action.payload.question };

    default:
      return state;
  }
};
