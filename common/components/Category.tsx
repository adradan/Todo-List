import { useContext } from 'react';
import Todo from './Todo';
import { TodoContext } from '@utils/context';

export enum CATEGORY {
  COMPLETE = 1,
  INCOMPLETE = 0,
}

export default function Category(props: { type: CATEGORY }) {
  const { todos } = useContext(TodoContext);
  const { type } = props;

  const displays = todos.map((t, idx) => {
    if (!type && !t.done) {
      return <Todo {...t} key={t.id} />;
    } else if (type && t.done) {
      return <Todo {...t} key={t.id} />;
    }
  });

  const header = type && todos.find((t) => t.done) ? 'Complete' : '';

  return (
    <div>
      {header}
      {displays}
    </div>
  );
}
