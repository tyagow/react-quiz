import {
  UPDATE_ANSWER,
  NEW_ANSWER,
  DELETE_ANSWER
} from "../actions/answerActions";
const initialState = { items: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ANSWER: {
      const answer = action.payload;
      const answers = state.items.filter(item => item.id !== answer.id);
      return { ...state, items: [...answers, action.payload] };
    }
    case NEW_ANSWER:
      return { ...state, items: [...state.items, action.payload] };

    case DELETE_ANSWER:
      const id = action.payload;
      const answers = state.items.filter(item => item.id !== id);
      return { ...state, items: [...answers] };

    default:
      return state;
  }
};
