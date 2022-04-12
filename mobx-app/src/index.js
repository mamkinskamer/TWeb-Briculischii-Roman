import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TodosProvider } from './TodoContent';

ReactDOM.render(
  <React.StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </React.StrictMode>,
  document.getElementById('root')
);