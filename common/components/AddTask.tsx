import { useState, useContext } from 'react';
import type { KeyboardEvent } from 'react';
import { TodoContext } from '@utils/context';
import { createId } from '@utils';

export default function AddTask() {
  const [task, setTask] = useState('');
  const { todos, setTodos } = useContext(TodoContext);

  const enter = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    const target = event.target as HTMLInputElement;

    if (key !== 'Enter' || !target.value) return;
    const current = [
      ...todos,
      {
        todo: target.value,
        done: false,
        id: createId(),
        date: Date.now(),
      },
    ];

    setTodos(current);
    setTask('');
  };

  return (
    <div>
      <input
        type="text"
        onChange={({ target }) => {
          setTask(target.value);
        }}
        value={task}
        onKeyUp={enter}
      />
    </div>
  );
}
