import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "./listItem";
import { useGetCommentsQuery } from "../http/http";
import { onLoadComments } from "../redux/slices/comment-reducer";

const List = () => {
  const { comments } = useSelector((state) => state.comments);
  const { data, error, isLoading } = useGetCommentsQuery("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(onLoadComments(data));
    }
  }, [data, dispatch]);

  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(error){
    return <h1>Error</h1>
  }

  return (
    <div className="list">
      {comments.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default List;
