import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../css/AddTodos.css"

export default function AddTodos() {
  return (
    <div>
      <InputGroup className="mb-2 mt-2">
        <Form.Control
          placeholder="할 일 추가하기"
          aria-label="Add TodoList"
          aria-describedby="basic-addon2"
        />
        <Button id="button-addon" className="add-todos">
          Add
        </Button>
      </InputGroup>
    </div>
  );
}
