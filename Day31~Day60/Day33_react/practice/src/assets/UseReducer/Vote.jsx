import React from "react";
import { useReducer } from "react";

export default function Like() {
  const likedInitial = { likes: 0, dislikes: 0 };

  const likedReducer = (state, action) => {
    switch (action.type) {
      case "LIKE":
        return {
          ...state,
          likes: state.likes + 1,
        };

      case "DISLIKE":
        return {
          ...state,
          dislikes: state.dislikes + 1,
        };

      case "RESET":
        return {
          ...state,
          likes: 0,
          dislikes: 0,
        };
    }
  };

  const [like, dispatch] = useReducer(likedReducer, likedInitial);

  return (
    <div>
      <h1>Like / DisLike</h1>

      <span>
        {like.likes} / {like.dislikes}
      </span>
      <button
        onClick={() =>
          dispatch({
            type: "LIKE",
          })
        }
      >
        Like
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "DISLIKE",
          })
        }
      >
        Dislike
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "RESET",
          })
        }
      >
        Reset
      </button>
    </div>
  );
}
