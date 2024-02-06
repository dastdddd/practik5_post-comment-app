import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  isLoading: false,
  isErrorMessage: null,
};

export const commentReducer = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addTodoItem: (state, action) => {
      const newItem = {
        id: Date.now(),
        body: action.payload,
      };
      state.comments = [newItem, ...state.comments];
    },
    deleteItem: (state, action) => {
      const newItem = state.comments.filter(
        (item) => item.id !== action.payload
      );
      state.comments = [...newItem]
    },
    onLoadComments:(state, action)=>{
      state.comments = action.payload
    }
  },
});

export const { addTodoItem, deleteItem, onLoadComments } = commentReducer.actions;

export default commentReducer.reducer;
