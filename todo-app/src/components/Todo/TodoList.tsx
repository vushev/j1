import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import http from '../../services/api';

import { Todo } from '../../types';
const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await http.get('/todos');
        setTodos(response.data);
        console.log(response.data);
    };

    const deleteTodo = async (id: number) => {
        await http.delete(`/todos/${id}`);
        setTodos(todos.filter(todo => todo.id !== id));
    };
    
    const onCreateTodo = async (data: Todo) => {
        setTodos([...todos, data]);
    };

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} id={todo.id} title={todo.title} onDelete={deleteTodo} />
            ))}
        </ul>
    );
};

export default TodoList;
