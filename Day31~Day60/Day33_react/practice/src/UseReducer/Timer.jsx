import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";

export default function Timer() {
  let hours;
  let minutes;
  let seconds;

  const timerInitial = {
    seconds: 0,
    isRunning: false,
  };

  const handleTimer = (state, action) => {
    switch (action.type) {
      case "START":
        return {
          ...state,
          isRunning: true,
        };

      case "STOP":
        return {
          ...state,
          isRunning: false,
        };

      case "RESET":
        return {
          ...state,
          isRunning: false,
          seconds: 0,
        };

      case "TIMES":
        return {
          ...state,
          seconds: state.seconds + 1,
        };
    }
  };

  const [timer, dispatch] = useReducer(handleTimer, timerInitial);

  useEffect(() => {
    if (!timer.isRunning) return;

    let interval = setInterval(() => {
      dispatch({ type: "TIMES" });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer.isRunning]);

    hours = Math.floor(timer.seconds / 3600);
    minutes = Math.floor(timer.seconds / 60);
    seconds = timer.seconds % 60;

    const format = (n) => n.toString().padStart(2, '0');

  return (
    <div>
      <h1>타이머</h1>
      <h2>
        {format(hours)}:{format(minutes)}:{format(seconds)}
      </h2>
      <button
        onClick={() => {
          dispatch({
            type: "START",
          });
        }}
      >
        시작
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "STOP",
          });
        }}
      >
        정지
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "RESET",
          });
        }}
      >
        리셋
      </button>
    </div>
  );
}
