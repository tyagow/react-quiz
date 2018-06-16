export const UPDATE_QUESTION = "UPDATE_QUESTION";
export const updateQuestion = question => dispatch => {
  dispatch(updateQuestionAction(question));
};
export const updateQuestionAction = question => ({
  type: UPDATE_QUESTION,
  payload: question
});

export const QUESTION_ANSWER_UP = "QUESTION_ANSWER_UP";
export const answerUpOrder = id => ({
  type: QUESTION_ANSWER_UP,
  payload: id
});

export const QUESTION_ANSWER_DOWN = "QUESTION_ANSWER_DOWN";
export const answerDownOrder = id => ({
  type: QUESTION_ANSWER_DOWN,
  payload: id
});

export const UPDATE_QUESTION_CORRECT_ANSWER = "UPDATE_QUESTION_CORRECT_ANSWER";
export const markAnswerAsCorrect = id => ({
  type: UPDATE_QUESTION_CORRECT_ANSWER,
  payload: id
});

export const SAVE_QUESTION = "SAVE_QUESTION";
export const saveQuestion = question => ({
  type: SAVE_QUESTION
});

export const LOAD_QUESTION = "LOAD_QUESTION";
export const loadQuestion = questionId => ({
  type: LOAD_QUESTION,
  payload: questionId
});
