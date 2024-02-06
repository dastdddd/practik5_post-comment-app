import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./slices/comment-reducer";
import likeReducer from "./slices/like-reducer";
import { commentApi } from "../http/http";

export const store = configureStore({
  reducer: {
    [commentApi.reducerPath]: commentApi.reducer,
    comments: commentReducer,
    like: likeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commentApi.middleware),
});
