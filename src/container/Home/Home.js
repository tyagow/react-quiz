import React from "react";
import { connect } from "react-redux";
import { Container, ListGroup, ListGroupItem } from "reactstrap";

import { selectQuestions } from "../../selectors";

export class Home extends React.Component {
  render() {
    return (
      <Container>
        <h1 className="pt-4">Quesitons</h1>
        <hr />
        <ListGroup>
          {this.props.questions.map(question => (
            <ListGroupItem>{question.title}</ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  questions: selectQuestions(state)
});

export default connect(mapStateToProps)(Home);
