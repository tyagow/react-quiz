import { UPDATE_ANSWER } from "../actions/answerActions";
const initialState = { items: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ANSWER:
      return { ...state, items: action.payload };

    default:
      return state;
  }
};
