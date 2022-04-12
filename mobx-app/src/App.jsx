import React from 'react'

import { useObserver } from 'mobx-react';
import { useTodosStore } from './TodoContent';

import Todo from './Todo';
import TodoAdd from './TodoAdd';

import './App.css'

function App() {
	const TodoStore = useTodosStore();

  console.log(TodoStore.todos, 'are')

  return useObserver(() => (
    <>
      {TodoStore.todos.map(todo => <Todo key={todo.id} text={todo.body} id={todo.id} />)}
      <TodoAdd />
    </>
  ));
}

export default App;