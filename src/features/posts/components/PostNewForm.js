import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { connect } from "react-redux";

import { createPost } from "../actions/postsActions";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 0 ${props => props.theme.padding};
`;

const Input = styled(Field)`
  color: ${props => props.theme.black};
  height: 36px;
  font-size: 0.8rem;
  padding: 0 4px;
  outline: 0;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Error = styled.div`
  font-size: 0.8rem;
  color: #fff;
  background-color: #b00e23;
  padding: 4px;
  margin: 4px 0;
  align-self: flex-start;
`;

const Button = styled.button`
  color: #fff;
  border: 0;
  cursor: pointer;
  border-radius: 2px;
  font-size: 0.8rem;
  padding: 10px;
  background-color: ${props => props.theme.brand};
  margin-top: 10px;
  &:disabled {
    opacity: 0.2;
    cursor: default;
  }
`;

function FormikForm(props) {
  const { errors, touched, isSubmitting } = props;
  const { body } = props.values;

  return (
    <StyledForm>
      <Input
        type="text"
        name="body"
        placeholder="Your confession here"
        maxLength="280"
      />
      {touched.body && errors.body && <Error>{errors.body}</Error>}
      <Button disabled={isSubmitting || body.length === 0}>Post</Button>
    </StyledForm>
  );
}

const PostNewForm = withFormik({
  validationSchema: Yup.object().shape({
    body: Yup.string()
      .required("Can't be empty")
      .max(280, "Max 280 characters")
  }),
  mapPropsToValues: props => ({
    body: props.body || ""
  }),
  handleSubmit(payload, bag) {
    bag.props.createPost(payload, {
      setSubmitting: bag.setSubmitting,
      resetForm: bag.resetForm
    });
  }
})(FormikForm);

export default connect(
  null,
  { createPost }
)(PostNewForm);
