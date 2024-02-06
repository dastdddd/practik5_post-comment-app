import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLikeCount, onDislikeCount } from "../redux/slices/like-reducer";

const ImageLike = () => {
  const { like, dislike } = useSelector((state) => state.like);
  const dispatch = useDispatch();

  return (
    <div className="images-like">
      <div className="imeges"></div>
      <div className="like">
        <div onClick={() => dispatch(onLikeCount())} className="like__plus">
          + {like}
        </div>
        <div onClick={() => dispatch(onDislikeCount())} className="like__minus">
          - {dislike}
        </div>
      </div>
    </div>
  );
};

export default ImageLike;
