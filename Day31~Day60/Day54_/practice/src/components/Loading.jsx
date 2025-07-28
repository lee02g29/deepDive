import clsx from "clsx";
import React from "react";
import '../styles/Loading.scss'

export default function Loading({ isLoading }) {
  return (
    <div
      className={clsx("box", {
        "loading-bg spinner": isLoading,
        "normal-bg" : !isLoading
      })}
    >
      {isLoading ? '로딩 중 ' : '로딩 완료'}
    </div>
  );
}
