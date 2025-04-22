import React, { useEffect, useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const storedDate = localStorage.getItem('todoDate');
    const today = new Date().toDateString();

    if (storedDate !== today) {
      localStorage.setItem('todoDate', today);
      localStorage.setItem('todos', JSON.stringify([]));
      setTodos([]);
    } else {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput('');
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontWeight: 'bold' }}>My Todo List</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={todoItemStyle}>
            <label style={labelStyle}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
              />{' '}
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
        style={inputStyle}
      />
    </div>
  );
};

const containerStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  width: '100%',
  maxWidth: '250px',
  margin: '50px auto',
  textAlign: 'left',
  fontFamily: 'Arial',
  boxShadow: '0 0 8px rgba(0,0,0,0.1)',
};

const inputStyle = {
  padding: '10px',
  marginTop: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  width: '100%',
  boxSizing: 'border-box',
};

const todoItemStyle = {
  marginBottom: '10px',
  wordWrap: 'break-word',
  overflowWrap: 'break-word',
};

const labelStyle = {
  display: 'inline-block',
  maxWidth: '100%',
  wordBreak: 'break-word',
  lineHeight: '1.5',
};

export default TodoList;
