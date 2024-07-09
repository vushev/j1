
import React from 'react';
type TodoItemProps = {
    id: number;
    title: string;
    onDelete: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ id, title, onDelete }) => {
    return (
        <li className="list-group-item mb-2 mt-2 d-flex justify-content-between align-items-center">
            {title} 
            <button onClick={() => onDelete(id)} className="btn btn-danger btn-sm">
                Delete
            </button>
        </li>
    );
};

export default TodoItem;
