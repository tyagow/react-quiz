import React from "react";
import { connect } from "react-redux";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { push } from "react-router-redux";

import { selectQuestions } from "../../selectors";

export class Home extends React.Component {
  onClickQuestion = question => e => {
    this.props.goTo(`/react-quiz/question/${question.id}`);
  };
  render() {
    return (
      <Container>
        <h1 className="pt-4">Questions</h1>
        <hr />
        <ListGroup>
          {this.props.questions.map(question => (
            <ListGroupItem onClick={this.onClickQuestion(question)}>
              {question.title}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  questions: selectQuestions(state)
});
const mapDispatchToProps = dispatch => ({
  goTo: url => dispatch(push(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
