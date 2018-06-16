import {
  UPDATE_QUESTION,
  QUESTION_ANSWER_DOWN,
  QUESTION_ANSWER_UP,
  UPDATE_QUESTION_CORRECT_ANSWER,
  SAVE_QUESTION,
  LOAD_QUESTION
} from "../actions/questionsActions";
import { swapLeft, swapRight } from "../utils";

const initialState = { item: {}, items: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUESTION:
      return { ...state, item: action.payload };
    case UPDATE_QUESTION_CORRECT_ANSWER: {
      let question = { ...state.item, correctAnswer: action.payload };
      return { ...state, item: question };
    }
    case LOAD_QUESTION: {
      const id = action.payload;
      let question = state.items.find(item => item.id === id);

      return { ...state, item: question };
    }

    case SAVE_QUESTION: {
      let question = state.item;
      let questions = state.items.filter(item => item.id !== question.id);
      return { ...state, items: [...questions, question] };
    }
    case QUESTION_ANSWER_UP: {
      const { item } = state;
      const id = action.payload;
      const answers = swapLeft(item.answers, id);
      const question = { ...item, answers };
      return { ...state, item: question };
    }
    case QUESTION_ANSWER_DOWN:
      const { item } = state;
      const id = action.payload;
      const answers = swapRight(item.answers, id);
      const question = { ...item, answers };
      return { ...state, item: question };

    default:
      return state;
  }
};
