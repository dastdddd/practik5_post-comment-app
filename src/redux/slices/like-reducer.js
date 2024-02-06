import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  like: 0,
  dislike: 0,
};

export const likeReducer = createSlice({
  name: "like",
  initialState,
  reducers: {
    onLikeCount: (state) => {
      state.like = state.like + 1;
    },
    onDislikeCount: (state) => {
      state.dislike = state.dislike + 1;
    },
  },
});

export const { onLikeCount, onDislikeCount } = likeReducer.actions;

export default likeReducer.reducer;
