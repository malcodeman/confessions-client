import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { createPost } from "../actions/postsActions";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 36px;
  font-size: 0.8rem;
  padding: 0 4px;
  outline: 0;
  border: 0;
  margin-bottom: 10px;
  color: ${(props) => props.theme.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.backgroundPrimary};
  background-color: ${(props) => props.theme.backgroundPrimary};
  :focus {
    border: 1px solid ${(props) => props.theme.brand};
    background-color: ${(props) => props.theme.backgroundSecondary};
  }
  ::placeholder {
    color: ${(props) => props.theme.placeholder};
  }
`;

const Error = styled.div`
  font-size: 0.8rem;
  padding: 4px;
  margin: 4px 0;
  align-self: flex-start;
  color: #fff;
  background-color: ${(props) => props.theme.error};
  border-radius: ${(props) => props.theme.borderRadius};
`;

const Submit = styled.button`
  font-size: 0.8rem;
  padding: 6px 16px;
  cursor: pointer;
  border: 0;
  align-self: flex-end;
  color: #fff;
  background-color: ${(props) => props.theme.brand};
  border-radius: ${(props) => props.theme.borderRadius};
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

function CreatePostForm(props) {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    body: Yup.string()
      .required("Can't be empty")
      .max(280, "Max 280 characters"),
  });
  const formik = useFormik({
    validationSchema,
    initialValues: {
      body: props.body || "",
    },
    onSubmit() {
      dispatch(
        createPost(formik.values, {
          setSubmitting: formik.setSubmitting,
          resetForm: formik.resetForm,
        })
      );
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        name="body"
        placeholder="Your confession here"
        value={formik.values.body}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.body && formik.errors.body && (
        <Error>{formik.errors.body}</Error>
      )}
      <Submit
        type="submit"
        disabled={
          formik.isSubmitting ||
          formik.errors.body ||
          formik.values.body.length === 0
        }
      >
        Post
      </Submit>
    </StyledForm>
  );
}

export default CreatePostForm;
