import { call, put, take, takeLatest } from "redux-saga/effects";
import { eventChannel } from "redux-saga";

import axios from "../../../core/http";

import {
  GET_POSTS_REQUEST,
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS,
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  INITIALIZE_WEB_SOCKETS_CHANNEL,
  WEBSOCKET_MESSAGE_RECEIVED
} from "../actions/postsActionTypes.js";

const getPostsApi = () => {
  return axios.get(`/posts`);
};

const createPostApi = newPost => {
  return axios.post(`/posts`, newPost);
};

function* getPosts() {
  try {
    const data = yield call(getPostsApi);
    yield put({ type: GET_POSTS_SUCCESS, payload: data.data });
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

function createSocketChannel(socket) {
  return eventChannel(emit => {
    socket.onmessage = message => {
      return emit({
        type: WEBSOCKET_MESSAGE_RECEIVED,
        payload: JSON.parse(message.data)
      });
    };
    socket.onopen = () => {
      console.log("WebSocket is open now.");
      socket.send("Hello server!");
    };
    const unsubscribe = () => {
      socket.close();
    };
    return unsubscribe;
  });
}

export function* initializeWebSockets() {
  const wsUrl = "ws://localhost:4000";
  const socket = new WebSocket(wsUrl);
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    const eventAction = yield take(socketChannel);
    yield put(eventAction);
  }
}

const saga = function*() {
  yield takeLatest(GET_POSTS_REQUEST, getPosts);
  yield takeLatest(CREATE_POST_REQUEST, createPost);
  yield takeLatest(INITIALIZE_WEB_SOCKETS_CHANNEL, initializeWebSockets);
};

export default saga;
