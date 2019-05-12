import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { connect } from "react-redux";

import { createPost } from "../actions/postsActions";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const Input = styled(Field)`
  height: 36px;
  font-size: 0.8rem;
  padding: 0 4px;
  outline: 0;
  border: 0;
  margin-bottom: 10px;
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.backgroundPrimary};
  background-color: ${props => props.theme.backgroundPrimary};
  :focus {
    border: 1px solid ${props => props.theme.brand};
    background-color: ${props => props.theme.backgroundSecondary};
  }
  ::placeholder {
    color: ${props => props.theme.placeholder};
  }
`;

const Error = styled.div`
  font-size: 0.8rem;
  padding: 4px;
  margin: 4px 0;
  align-self: flex-start;
  color: #fff;
  background-color: ${props => props.theme.error};
  border-radius: ${props => props.theme.borderRadius};
`;

const Submit = styled.button`
  font-size: 0.8rem;
  padding: 6px 16px;
  cursor: pointer;
  border: 0;
  align-self: flex-end;
  color: #fff;
  background-color: ${props => props.theme.brand};
  border-radius: ${props => props.theme.borderRadius};
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

function FormikForm(props) {
  const { errors, values, touched, isSubmitting } = props;

  return (
    <StyledForm>
      <Input type="text" name="body" placeholder="Your confession here" />
      {touched.body && errors.body && <Error>{errors.body}</Error>}
      <Submit
        type="submit"
        disabled={isSubmitting || errors.body || values.body.length === 0}
      >
        Post
      </Submit>
    </StyledForm>
  );
}

const CreatePostForm = withFormik({
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
)(CreatePostForm);
