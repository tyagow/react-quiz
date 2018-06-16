export const UPDATE_ANSWER = "UPDATE_ANSWER";
export const updateAnswer = answer => dispatch => {
  dispatch({
    type: UPDATE_ANSWER,
    payload: answer
  });
};
export const NEW_ANSWER = "NEW_ANSWER";
export const createNewAnswer = (answer = { title: "" }) => ({
  type: NEW_ANSWER,
  payload: answer
});

export const DELETE_ANSWER = "DELETE_ANSWER";
export const deleteAnswer = id => ({
  type: DELETE_ANSWER,
  payload: id
});
