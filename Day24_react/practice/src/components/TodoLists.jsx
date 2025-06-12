import Form from 'react-bootstrap/Form';

export default function TodoLists({todo}) {

  return (
    <div>
      <Form.Check className="mt-3 mb-3" aria-label="todo" label={todo.title} checked={todo.completed}/>
    </div>
  );
}
