import React from "react";
import { connect } from "react-redux";
import { Container, Row } from "reactstrap";

import { updateQuestion } from "../../actions/questionsActions";
import { updateAnswer } from "../../actions/answerActions";

import { selectAnwsers, selectQuestionCreate } from "../../selectors/index";
import AnswerCardRow from "../../components/AnswerCardRow";
import CreateAnswer from "../../components/CreateAnswer";
import CreateQuestion from "../../components/CreateQuestion/CreateQuestion";

export class NewQuestionScreen extends React.Component {
  componentDidMount = () => {
    const question = { title: "", answers: [], correctAnswer: [] };
    this.props.updateQuestion(question);
  };

  render() {
    const { question, updateQuestion, updateAnswer, answers } = this.props;
    return (
      <Container>
        <Row>
          <h1 className="mt-4">New Question</h1>
        </Row>
        <hr />
        <CreateQuestion question={question} updateQuestion={updateQuestion} />
        <hr className="mt-4 mb-4" />
        <h2 className="mt-4 mb-4">Answers</h2>
        <CreateAnswer question={question} updateAnswer={updateAnswer} />
        {answers.map(answer => <AnswerCardRow answer={answer} />)}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  question: selectQuestionCreate(state),
  answers: selectAnwsers(state)
});

export default connect(
  mapStateToProps,
  { updateQuestion, updateAnswer }
)(NewQuestionScreen);
