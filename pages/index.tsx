import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Todo from '@components/Todo';
import { CircleMarker, AddTask } from '@components';
import { default as Category, CATEGORY } from '@components/Category';
import { TodoI, TodoContext } from '@utils/context';
import { useState, useEffect } from 'react';

const Home: NextPage = () => {
  const [todos, setTodos] = useState([] as TodoI[]);

  useEffect(() => {
    // console.log(todoDisplay);
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <div>
        <AddTask />
        <Category type={CATEGORY.INCOMPLETE} />
        <Category type={CATEGORY.COMPLETE} />
      </div>
    </TodoContext.Provider>
  );
};

export default Home;
