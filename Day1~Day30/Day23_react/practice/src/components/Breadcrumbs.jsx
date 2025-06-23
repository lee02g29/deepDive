import React from "react";
import { Breadcrumb } from "react-bootstrap";

export default function Breadcrumbs() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>홈</Breadcrumb.Item>
      <Breadcrumb.Item>
        메뉴
      </Breadcrumb.Item>
      <Breadcrumb.Item active>베이커리</Breadcrumb.Item>
    </Breadcrumb>
  );
}
