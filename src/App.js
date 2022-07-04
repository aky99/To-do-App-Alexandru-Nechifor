import React, { useState, useEffect } from 'react';
import './App.css';
// Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';
import ClearBtn from './components/ClearBtn';

function App() {
  // State stuff
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);
  // Use EFFECT
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Functions

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  // Save to local
  const saveLocalTodos = () => {
    if (todos.length > 0) localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>To-do List App by Alexandru</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />

      <ClearBtn setTodos={setTodos} />
    </div>
  );
}

export default App;
