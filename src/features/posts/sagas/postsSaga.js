import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http";
import {
  GET_POSTS_REQUEST,
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS,
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS
} from "../actions/postsActionTypes.js";

const getPostsApi = (page, limit) => {
  return axios.get(`/posts?page=${page}&limit=${limit}`);
};

const createPostApi = newPost => {
  return axios.post(`/posts`, newPost);
};

function* getPosts(action) {
  try {
    const { page, limit } = action.payload;
    const data = yield call(getPostsApi, page, limit);
    const posts = data.data.posts;
    const pagination = data.data.pagination;

    yield put({ type: GET_POSTS_SUCCESS, payload: { posts, pagination } });
  } catch (error) {
    yield put({ type: GET_POSTS_FAILURE, error });
  }
}

function* createPost(action) {
  try {
    const newPost = action.payload;
    const updated = yield call(createPostApi, newPost);

    yield put({ type: CREATE_POST_SUCCESS, payload: updated.data });
  } catch (error) {
    yield put({ type: CREATE_POST_FAILURE, error });
  } finally {
    const { setSubmitting, resetForm } = action.meta;

    setSubmitting(false);
    resetForm();
  }
}

const saga = function*() {
  yield takeLatest(GET_POSTS_REQUEST, getPosts);
  yield takeLatest(CREATE_POST_REQUEST, createPost);
};

export default saga;
