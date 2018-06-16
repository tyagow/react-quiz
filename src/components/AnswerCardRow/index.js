import React from "react";
import PropTypes from "prop-types";
import { CardTitle, CardBody, Card, Row } from "reactstrap";

const AnswerCardRow = props => {
  return (
    <Row>
      <Card>
        <CardBody>
          <CardTitle>{this.props.title}</CardTitle>
        </CardBody>
      </Card>
    </Row>
  );
};

AnswerCardRow.propTypes = {
  answer: PropTypes.shape({
    questionId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
};

export default AnswerCardRow;
