import React from "react";
import { connect } from "react-redux";
import { Container, Form, FormGroup, Label, Input, Row } from "reactstrap";
import { updateQuestion } from "../../actions/questionsActions";
import { selectAnwser, selectQuestionCreate } from "../../selectors/index";
import AnswerCardRow from "../../components/AnswerCardRow";
import CreateAnswer from "../../components/CreateAnswer ";

export class NewQuestionScreen extends React.Component {
  onChange = e => {
    let question = { id: this.props.id, title: this.props.title };
    question = { ...question, [e.target.name]: e.target.value };
    this.props.updateQuestion(question);
  };
  render() {
    return (
      <Container>
        <Row>
          <h1 className="mt-4">New Question</h1>
        </Row>
        <hr />
        <Row>
          <Form className="mt-4">
            <FormGroup>
              <Label for="questionTitle">Question Title</Label>
              <Input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.props.title}
                id="questionTitle"
                placeholder="type you question here"
              />
            </FormGroup>
          </Form>
        </Row>
        <hr className="mt-4 mb-4" />
        <h2 className="mt-4 mb-4">Answers</h2>
        <CreateAnswer />
        {this.props.answers.map(answer => <AnswerCardRow answer={answer} />)}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ...selectQuestionCreate(state),
  answers: selectAnwser(state)
});

export default connect(
  mapStateToProps,
  { updateQuestion }
)(NewQuestionScreen);
