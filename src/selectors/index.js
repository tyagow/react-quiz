export const selectQuestionCreate = state => state.questions.item;
export const selectQuestions = state => state.questions.items;

export const selectAnwsers = state => {
  const question = selectQuestionCreate(state);
  const answers = question.answers
    ? question.answers.map(id => {
        return state.answers.items.find(answer => answer.id === id);
      })
    : [];
  return answers;
};
