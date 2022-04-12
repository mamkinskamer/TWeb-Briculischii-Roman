import { useState } from 'react'
import { useTodosStore } from './TodoContent'

const TodoAdd = () => {
	const [ todoBody, setTodoBody ] = useState('');
	const TodoStore = useTodosStore();

	const handleAddTodo = () => {
		TodoStore.addTodo(todoBody);
		setTodoBody('');
	};

	return (
		<>
			<input value={todoBody} onChange={(e) => setTodoBody(e.target.value)} type="text" placeholder="todo" />
			<button onClick={handleAddTodo}>add todo</button>
		</>
	);
}

export default TodoAdd