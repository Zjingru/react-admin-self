import React, { useState } from 'react';
import { Button, Checkbox } from 'antd';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState('');

    const handleAdd = () => {
        if (!input.trim()) return;
        setTodos([
            ...todos,
            { id: Date.now(), text: input.trim(), completed: false }
        ]);
        setInput('');
    };

    const handleToggle = (id: number) => {
        setTodos(todos =>
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDelete = (id: number) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    return (
        <div style={{ maxWidth: '80%', margin: '40px auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
            <h2>Todo List</h2>
            <div style={{ display: 'flex', marginBottom: 16 }}>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleAdd()}
                    placeholder="Add a new todo"
                    style={{ flex: 1, marginRight: 8, padding: 8 }}
                />
                <button onClick={handleAdd} style={{ padding: '8px 16px' }}>Add</button>
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {todos.map(todo => (
                    <li key={todo.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                        <Checkbox checked={todo.completed} onChange={() => handleToggle(todo.id)}>
                            <span style={{
                                flex: 1,
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                color: todo.completed ? '#aaa' : '#222'
                            }}>
                                {todo.text}
                            </span>
                        </Checkbox>
                        {/* <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggle(todo.id)}
                            style={{ marginRight: 8 }}
                        />
                        <span style={{
                            flex: 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#aaa' : '#222'
                        }}>
                            {todo.text}
                        </span> */}
                        <button onClick={() => handleDelete(todo.id)} style={{ marginLeft: 8 }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;