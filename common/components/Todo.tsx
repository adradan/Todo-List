import { useContext } from 'react';
import { TodoContext } from '@utils/context';
import CircleMarker from './CircleMarker';

export default function Todo(props: {
  todo: string;
  done: boolean;
  id: string;
}) {
  const { todo, done, id } = props;
  const { todos, setTodos } = useContext(TodoContext);

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
      <CircleMarker done={done} setDone={onclick} />
      <button type="button" onClick={deleteTodo}>
        Delete
      </button>
    </div>
  );
}
