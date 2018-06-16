import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Label, Input, Row } from "reactstrap";

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
              placeholder="type your question here"
            />
          </FormGroup>
        </Form>
      </Row>
    );
  }
}
CreateQuestion.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  updateQuestion: PropTypes.func.isRequired
};
