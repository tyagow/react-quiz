export const selectQuestionCreate = state => state.questionCreator.item;
export const selectAnwsers = state => {
  const question = selectQuestionCreate(state);
  const answers = state.answers.items.filter(
    answer => answer.questionId === question.id
  );
  return answers;
};
