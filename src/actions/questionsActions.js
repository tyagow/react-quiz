export const UPDATE_QUESTION = "UPDATE_QUESTION";
export const updateQuestion = question => dispatch => {
  dispatch(updateQuestionAction(question));
};
function updateQuestionAction(question) {
  return {
    type: UPDATE_QUESTION,
    payload: question
  };
}
