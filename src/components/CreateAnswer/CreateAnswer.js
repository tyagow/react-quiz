import React from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Label, Input, Row } from "reactstrap";

export class CreateAnswer extends React.Component {
  onChange = e => {
    let answer = { id: this.props.id, title: this.props.title };
    answer = { ...answer, [e.target.name]: e.target.value };
    this.props.updateAnswer(answer);
  };
  render() {
    return (
      <Row>
        <Form>
          <FormGroup>
            <Label for="answerTitle">Answer Title</Label>
            <Input
              type="text"
              name="title"
              onChange={this.onChange}
              id="answerTitle"
              placeholder="type your answer here"
            />
          </FormGroup>
        </Form>
      </Row>
    );
  }
}

CreateAnswer.propTypes = {
  questionId: PropTypes.string,
  updateAnswer: PropTypes.func.isRequired
};

export default CreateAnswer;
