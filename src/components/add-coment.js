import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../redux/slices/comment-reducer";

const AddComent = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(addTodoItem(value));
      setValue("");
    } else {
      alert("empty");
    }
  };

  return (
    <form onSubmit={handleClick}>
      <input
        onChange={(e) => setValue(e.target.value)}
        className="input"
        value={value}
        type="text"
        placeholder="Напиши что нибуть"
      />
      <input hidden type="submit" />
    </form>
  );
};

export default AddComent;
