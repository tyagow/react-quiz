export const UPDATE_ANSWER = "UPDATE_ANSWER";
export const updateAnswer = answer => dispatch => {
  dispatch({
    type: UPDATE_ANSWER,
    payload: answer
  });
};
