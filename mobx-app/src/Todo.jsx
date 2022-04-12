import React from 'react'
import { useTodosStore } from './TodoContent';

const Todo = ({ text, id }) => {
	const TodoStore = useTodosStore();

	const handleCloseTodo = () => {
		TodoStore.removeTodo(id);
	};

	return (
		<div onClick={handleCloseTodo} className="todo-container">
			<span>{text}</span>
			<span>x</span>
		</div>	
	)
}

export default Todo;