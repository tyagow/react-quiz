export const UPDATE_QUESTION = "UPDATE_QUESTION";
export const updateQuestion = question => dispatch => {
  dispatch({
    type: UPDATE_QUESTION,
    payload: question
  });
};
