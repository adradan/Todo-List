import { createContext, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export interface TodoI {
  todo: string;
  done: boolean;
  id: string;
  date: number;
}

export function reducer(state: TodoI[], item: TodoI) {
  return [...state, item];
}

export const TodoContext = createContext({
  todos: [] as TodoI[],
  setTodos: (value: TodoI[]) => {},
});
