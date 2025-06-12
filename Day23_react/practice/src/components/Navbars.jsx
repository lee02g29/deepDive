import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navbars() {
  const menus = [
    {
      id: 1,
      name: "원두",
      link: "#",
    },
    {
      id: 2,
      name: "메뉴",
      link: "#",
    },
    {
      id: 3,
      name: "유통제품",
      link: "#",
    },
    {
      id: 4,
      name: "이디야멤버스",
      link: "#",
    },
    {
      id: 5,
      name: "상품권, 제휴카드",
      link: "#",
    },
        {
      id: 6,
      name: "브랜드 소식",
      link: "#",
    },
        {
      id: 7,
      name: "고객지원, 케이터링",
      link: "#",
    },
  ];

  return (
    <Navbar sticky="top" expand="xl">
      <Container>
        <Nav className="justify-content-center flex-grow-1 pe-3 gap-5">
          
          {menus.map((menu) => (
            <Nav.Link href={menu.link} key={menu.id}>{menu.name}</Nav.Link>
          ))}

        </Nav>
      </Container>
    </Navbar>
  );
}
