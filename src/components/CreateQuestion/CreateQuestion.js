import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";

export default class CreateQuestion extends Component {
  onChange = e => {
    const { id, title, answers } = this.props.question;
    let question = {
      id,
      title,
      answers
    };
    question = { ...question, [e.target.name]: e.target.value };
    this.props.updateQuestion(question);
  };
  render() {
    return (
      <Form className="mt-4">
        <FormGroup row>
          <Label sm={2} for="questionTitle">
            Question Title
          </Label>
          <Col sm={8}>
            <Input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.props.question.title}
              id="questionTitle"
              placeholder="type your question here"
            />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
CreateQuestion.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  updateQuestion: PropTypes.func.isRequired
};
