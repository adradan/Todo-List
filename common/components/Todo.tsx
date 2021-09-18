import { useContext } from 'react';
import { TodoContext } from '@utils/context';

export default function Todo(props: {
  todo: string;
  done: boolean;
  id: string;
}) {
  const { todos, setTodos } = useContext(TodoContext);
  const { todo, done, id } = props;

  const onclick = () => {
    let current = [...todos];
    current = current.map((t) => {
      if (t.id !== id) return t;
      t.done = !t.done;
      return t;
    });
    setTodos(current);
  };

  const deleteTodo = () => {
    let current = todos.filter((t) => t.id !== id);
    setTodos(current);
  };

  return (
    <div>
      {todo}
      {String(done)}
      <button type="button" onClick={onclick}>
        Done
      </button>
      <button type="button" onClick={deleteTodo}>
        Delete
      </button>
    </div>
  );
}
