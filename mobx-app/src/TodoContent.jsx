import { createContext, useContext } from 'react';
import { useLocalStore } from 'mobx-react'

import { createTodosStore } from './TodoStore';

const TodoContent = createContext(null)

export const TodosProvider = ({ children }) => {
	const TodoStore = useLocalStore(createTodosStore);

	return (
		<TodoContent.Provider value={TodoStore}>
			{ children }
		</TodoContent.Provider>
	)
}

export const useTodosStore = () => useContext(TodoContent); 