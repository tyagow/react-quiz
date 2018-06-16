import React from "react";
import { connect } from "react-redux";
import { Container, Button } from "reactstrap";

import {
  updateQuestion,
  answerUpOrder,
  answerDownOrder,
  markAnswerAsCorrect,
  saveQuestion
} from "../../actions/questionsActions";
import {
  updateAnswer,
  createNewAnswer,
  deleteAnswer
} from "../../actions/answerActions";

import { selectAnwsers, selectQuestionCreate } from "../../selectors/index";
import EditableAnswerLabel from "../../components/EditableAnswerLabel";
import CreateQuestion from "../../components/CreateQuestion/CreateQuestion";

export class NewQuestionScreen extends React.Component {
  componentDidMount = () => {
    const question = { title: "", answers: [], correctAnswer: [] };
    this.props.updateQuestion(question);
  };
  addNewAnswer = e => {
    e.preventDefault();
    this.props.createNewAnswer();
  };
  markAnswerAsCorrect = answerId => {
    this.props.markAnswerAsCorrect(answerId);
  };
  render() {
    const {
      question,
      updateQuestion,
      updateAnswer,
      answers,
      deleteAnswer,
      answerUpOrder,
      answerDownOrder,
      markAnswerAsCorrect,
      saveQuestion
    } = this.props;
    return (
      <Container>
        <h1 className="mt-4">
          New Question{" "}
          <Button
            outline
            color="primary"
            className="float-right"
            onClick={saveQuestion}
          >
            Save Question
          </Button>
        </h1>
        <hr />
        <CreateQuestion question={question} updateQuestion={updateQuestion} />
        <hr className="mt-4 mb-4" />
        <h2 className="mt-4 mb-4">
          Answers{" "}
          <Button
            outline
            color="primary"
            className="float-right"
            onClick={this.addNewAnswer}
          >
            New Answer
          </Button>
        </h2>
        <hr />
        {answers.map(answer => {
          return (
            <EditableAnswerLabel
              key={answer.id}
              {...answer}
              deleteAnswer={deleteAnswer}
              updateAnswer={updateAnswer}
              answerUpOrder={answerUpOrder}
              answerDownOrder={answerDownOrder}
              markAnswerAsCorrect={markAnswerAsCorrect}
              isCorrectAnswer={answer.id === question.correctAnswer}
            />
          );
        })}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  question: selectQuestionCreate(state),
  answers: selectAnwsers(state)
});
const mapDispatchToProps = dispatch => ({
  updateQuestion: question => dispatch(updateQuestion(question)),
  updateAnswer: answer => dispatch(updateAnswer(answer)),
  createNewAnswer: () => dispatch(createNewAnswer()),
  deleteAnswer: id => dispatch(deleteAnswer(id)),
  answerUpOrder: id => dispatch(answerUpOrder(id)),
  answerDownOrder: id => dispatch(answerDownOrder(id)),
  markAnswerAsCorrect: id => dispatch(markAnswerAsCorrect(id)),
  saveQuestion: () => dispatch(saveQuestion())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewQuestionScreen);
