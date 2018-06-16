import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Label,
  Input,
  Col,
  Button,
  ButtonGroup,
  Card,
  CardBody
} from "reactstrap";

export class EditableAnswerLabel extends React.Component {
  onChange = e => {
    let answer = { id: this.props.id, title: this.props.title };
    answer = { ...answer, [e.target.name]: e.target.value };
    this.props.updateAnswer(answer);
  };
  deleteAnswer = e => {
    e.preventDefault();
    this.props.deleteAnswer(this.props.id);
  };
  answerAscend = e => {
    e.preventDefault();
    this.props.answerUpOrder(this.props.id);
  };
  descendAnswer = e => {
    e.preventDefault();
    this.props.answerDownOrder(this.props.id);
  };
  markAsCorrectAnswer = e => {
    e.preventDefault();
    this.props.markAnswerAsCorrect(this.props.id);
  };

  renderButtons = () => (
    <React.Fragment>
      <ButtonGroup>
        <Button outline color="primary" onClick={this.answerAscend}>
          up
        </Button>
        <Button outline color="primary" onClick={this.descendAnswer}>
          down
        </Button>
        <Button outline color="danger" onClick={this.deleteAnswer}>
          delete
        </Button>
      </ButtonGroup>
      {!this.props.isCorrectAnswer ? (
        <Button color="success" outline onClick={this.markAsCorrectAnswer}>
          Mark as correct
        </Button>
      ) : (
        <div>Correct Answer!</div>
      )}
    </React.Fragment>
  );
  render() {
    return (
      <Row>
        <Col sm={12}>
          <Card>
            <CardBody>
              <Row>
                <Label sm={1} for="answerTitle">
                  Title
                </Label>
                <Col sm={7}>
                  <Input
                    type="text"
                    name="title"
                    onChange={this.onChange}
                    id="answerTitle"
                    value={this.props.title}
                    placeholder="type your answer here"
                  />
                </Col>
                <Col sm={3}> {this.renderButtons()}</Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

EditableAnswerLabel.propTypes = {
  questionId: PropTypes.string,
  updateAnswer: PropTypes.func.isRequired,
  answerUpOrder: PropTypes.func.isRequired,
  answerDownOrder: PropTypes.func.isRequired,
  markAnswerAsCorrect: PropTypes.func.isRequired
};

export default EditableAnswerLabel;
