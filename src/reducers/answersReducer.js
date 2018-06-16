import { UPDATE_ANSWER } from "../actions/answerActions";
const initialState = { items: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ANSWER:
      const answer = action.payload;

      const answers = state.items.filter(item => item.id !== answer.id);

      return { ...state, items: [...answers, action.payload] };

    default:
      return state;
  }
};
