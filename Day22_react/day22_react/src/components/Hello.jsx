

/*
  클래스 컴포넌트
  
  어떤 형태의 컴포넌트든 항상 첫 글자는 대문자로 작성하는 것이 필요

*/

import { Component } from "react";
/*
  Component상속 필요
  -> 자바인지 리액트 클래스인지 구분이 안됨
*/

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = props.count;
  }

  render() {
    return <h1>클래스형 컴포넌트</h1>
  }
}

export default Hello;