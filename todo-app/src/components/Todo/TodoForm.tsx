import React, { useState } from 'react';
import http from '../../services/api';
import { useTodoContext } from './TodoContext';
import { useNavigate } from 'react-router-dom';

const TodoForm: React.FC = () => {
    const navigate = useNavigate();
    const { addTodo } = useTodoContext();
    const [title, setTitle] = useState<string>('');

    const createTodo = async (title: string) => {
        const response = await http.post('/todos', { title });

        if (response.status === 200) {
            addTodo(response.data);
            setTitle('');
            navigate('/todos');
        }

    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title) return;
        createTodo(title);
    };

    return (
        <form onSubmit={handleSubmit}>
            {!title && <p className="text-muted">Please provide the title</p>}
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="New TODO"
                />
                <button type="submit" className="btn btn-primary" disabled={!title}>Add TODO</button>
            </div>
        </form>
    );
};

export default TodoForm;
