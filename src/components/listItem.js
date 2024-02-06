import React, { useState, useEffect } from "react";
import { deleteItem } from "../redux/slices/comment-reducer";
import { useDispatch } from "react-redux";

const ListItem = ({ body, id }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(`${body}`);
  }, [body]);

  return (
    <div className="comment-item">
      <span onClick={() => dispatch(deleteItem(id))}>x</span>
      <input
        onChange={(e) => {
          setValue(e.target.value);
          if (e.target.value.length === 0) {
            dispatch(deleteItem(id));
          }
        }}
        className="comment"
        type="text"
        value={value}
      />
    </div>
  );
};

export default ListItem;
