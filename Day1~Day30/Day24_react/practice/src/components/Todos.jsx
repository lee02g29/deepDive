import Card from "react-bootstrap/Card";
import Navbars from "./Navbars";
import AddTodos from "./AddTodos";
import TodoLists from "./TodoLists";
import { useState, useEffect } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (todos.length === 0) {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => {
          setTodos(json)
    });

      console.log("타입 : ", typeof todos);
      console.log("데이터: ", todos);
    }
  }, [todos]);

  return (
    <Card className="text-center">
      <Card.Header><Navbars /></Card.Header>
      <Card.Body>
        {todos.map((todo) => (<TodoLists todo={todo} key={todo.id}/>))}
      </Card.Body>
      <Card.Footer className="text-muted">
        <AddTodos />
      </Card.Footer>
    </Card>
  );
}
